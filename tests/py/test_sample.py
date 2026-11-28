import mat3ra.prode as prode
import pytest


def test_property_name_enum():
    result = prode.PropertyName.non_scalar.band_gaps
    assert result.value == "band_gaps"
    assert isinstance(result.value, str)


BAND_STRUCTURE = {"name": "band_structure", "xDataArray": []}


@pytest.mark.parametrize(
    ("fermi_energy_properties", "fermi_energy"),
    [([{"name": "fermi_energy", "value": 5.2}], 5.2), ([], None)],
)
def test_add_fermi_energy_to_properties(fermi_energy_properties, fermi_energy):
    properties = prode.add_fermi_energy_to_properties([BAND_STRUCTURE], fermi_energy_properties)
    assert properties == [{**BAND_STRUCTURE, "fermiEnergy": fermi_energy}]
