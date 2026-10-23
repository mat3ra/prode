"""Reading values out of a list of ESSE property records."""

import pytest
from mat3ra.prode import band_gap, energy_contributions, find_property, property_value

PROPERTIES = [
    {"name": "total_energy", "units": "Ry", "value": -15.85},
    {
        "name": "total_energy_contributions",
        "units": "Ry",
        "hartree": {"name": "hartree", "value": 1.1},
        "ewald": {"name": "ewald", "value": -16.9},
    },
    {
        "name": "atomic_forces",
        "units": "Ry/a.u.",
        "values": [
            {"id": 2, "value": [-0.01, 0.0, 0.0]},
            {"id": 1, "value": [0.01, 0.0, 0.0]},
        ],
    },
    {
        "name": "band_gaps",
        "values": [
            {"type": "direct", "units": "Ry", "value": 1.0},
            {"type": "indirect", "units": "Ry", "value": 0.9},
        ],
    },
]


def test_a_scalar_record_reads_as_its_value():
    assert property_value(PROPERTIES, "total_energy", "Ry") == -15.85


def test_a_per_atom_record_reads_in_atom_order():
    assert property_value(PROPERTIES, "atomic_forces", "Ry/a.u.") == [
        [0.01, 0.0, 0.0],
        [-0.01, 0.0, 0.0],
    ]


def test_another_unit_is_refused_rather_than_converted():
    with pytest.raises(ValueError):
        property_value(PROPERTIES, "total_energy", "eV")


def test_a_missing_record_raises_unless_a_default_is_given():
    with pytest.raises(KeyError):
        property_value(PROPERTIES, "stress_tensor", "kbar")
    assert property_value(PROPERTIES, "stress_tensor", "kbar", default=None) is None
    assert find_property(PROPERTIES, "stress_tensor") is None


def test_energy_contributions_are_keyed_as_esse_keys_them():
    assert energy_contributions(PROPERTIES, "Ry") == {"hartree": 1.1, "ewald": -16.9}


def test_band_gap_by_type_and_none_without_a_gap():
    assert band_gap(PROPERTIES, "indirect", "Ry") == 0.9
    assert band_gap(PROPERTIES, "direct", "Ry") == 1.0
    assert band_gap([], "indirect", "Ry") is None


def test_a_property_name_enum_member_finds_its_record():
    from mat3ra.prode import PropertyName

    assert property_value(PROPERTIES, PropertyName.scalar.total_energy, "Ry") == -15.85
