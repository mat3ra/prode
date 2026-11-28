from enum import Enum
from types import SimpleNamespace
from typing import List

from mat3ra.esse.models.properties_directory.enum_options import (
    ScalarPropertyEnum,
    NonScalarPropertyEnum,
    TensorPropertyEnum,
    ObjectPropertyEnum,
    ProtoPropertyEnum,
    MetaPropertyEnum,
)


class AllPropertyEnum(str, Enum):
    """All property names combined from all categories"""

    pass


for enum_class in [
    ScalarPropertyEnum,
    NonScalarPropertyEnum,
    TensorPropertyEnum,
    ObjectPropertyEnum,
    ProtoPropertyEnum,
    MetaPropertyEnum,
]:
    for item in enum_class:
        setattr(AllPropertyEnum, item.name, item.value)


PropertyName = SimpleNamespace(
    scalar=ScalarPropertyEnum,
    non_scalar=NonScalarPropertyEnum,
    tensor=TensorPropertyEnum,
    object=ObjectPropertyEnum,
    proto=ProtoPropertyEnum,
    meta=MetaPropertyEnum,
    all=AllPropertyEnum,
)


FERMI_ENERGY_PROPERTIES = {
    PropertyName.non_scalar.band_structure.value,
    PropertyName.non_scalar.density_of_states.value,
}


def add_fermi_energy_to_properties(properties: List[dict], fermi_energy_properties: List[dict]) -> List[dict]:
    """
    Returns the properties with `fermiEnergy` set to the value of the first Fermi energy property, None without one.
    """
    fermi_energy = fermi_energy_properties[0].get("value") if fermi_energy_properties else None
    return [{**property_data, "fermiEnergy": fermi_energy} for property_data in properties]
