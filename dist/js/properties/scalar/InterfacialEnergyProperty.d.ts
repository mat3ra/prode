import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { InterfacialEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { InterfacialEnergyPropertySchemaMixin } from "../../generated/InterfacialEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = InterfacialEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<InterfacialEnergyPropertySchemaMixin>;
declare const InterfacialEnergyProperty_base: Base;
export default class InterfacialEnergyProperty extends InterfacialEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.interfacial_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
