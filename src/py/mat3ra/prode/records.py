"""Read values out of lists of ESSE property records.

A code that reports its results as ESSE properties writes a list of records,
each one validated by its ESSE property schema::

    {"name": "total_energy", "units": "Ry", "value": -15.85}
    {"name": "atomic_forces", "units": "Ry/a.u.", "values": [{"id": 1, "value": [0.0, 0.0, 0.0]}]}

These functions look a record up by name and return its value in the unit the
caller names. A record in any other unit is refused rather than converted: a
silently rescaled value is the failure the ``units`` field exists to prevent.
"""

from collections.abc import Iterable
from typing import Any

_MISSING = object()

Records = Iterable[dict]


def find_property(properties: Records, name: str) -> dict | None:
    """Return the record named *name* (e.g. ``"total_energy"``), or ``None`` if there is none."""
    name = getattr(name, "value", name)  # a PropertyName enum member or its string
    for record in properties:
        if record.get("name") == name:
            return record
    return None


def _require_units(name: str, units_found: Any, units: str) -> None:
    if units_found != units:
        raise ValueError(f"{name} is in {units_found!r}, but the caller reads it as {units!r}.")


def property_value(properties: Records, name: str, units: str, default: Any = _MISSING) -> Any:
    """Return the value of the record *name*, which must be in *units*.

    For a per-atom record (``values`` of ``{"id", "value"}`` entries, such as
    ``atomic_forces``) the result is one value per atom, in id order.

    Raises ``KeyError`` when there is no such record and no *default* was given,
    and ``ValueError`` when the record is in a unit other than *units*.
    """
    record = find_property(properties, name)
    if record is None:
        if default is _MISSING:
            raise KeyError(f"no {getattr(name, 'value', name)!r} property")
        return default
    _require_units(record["name"], record.get("units"), units)
    if "values" in record:
        return [entry["value"] for entry in sorted(record["values"], key=lambda entry: entry["id"])]
    return record["value"]


def energy_contributions(properties: Records, units: str) -> dict:
    """Return the ``total_energy_contributions`` record as ``{ESSE key: value}``.

    The keys are ESSE's (``eigenvalues``, ``hartree``, ``exchange_correlation``,
    ``ewald``, ``temperatureEntropy``, ...); only the terms the record lists.
    """
    record = find_property(properties, "total_energy_contributions")
    if record is None:
        raise KeyError("no 'total_energy_contributions' property")
    _require_units(record["name"], record.get("units"), units)
    return {key: term["value"] for key, term in record.items() if isinstance(term, dict) and "value" in term}


def band_gap(properties: Records, gap_type: str, units: str) -> float | None:
    """Return the ``"direct"`` or ``"indirect"`` entry of ``band_gaps``, or ``None`` if there is none."""
    record = find_property(properties, "band_gaps")
    if record is None:
        return None
    for gap in record["values"]:
        if gap["type"] == gap_type:
            _require_units(f"the {gap_type} band gap", gap.get("units"), units)
            return gap["value"]
    return None
