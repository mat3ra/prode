import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { DefectFormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
import { DefectFormationEnergyPropertySchemaMixin } from "../../generated/DefectFormationEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = DefectFormationEnergyPropertySchema;
type Base = typeof Property<Schema> & Constructor<DefectFormationEnergyPropertySchemaMixin>;
declare const DefectFormationEnergyProperty_base: Base;
export default class DefectFormationEnergyProperty extends DefectFormationEnergyProperty_base implements Schema {
    static readonly isRefined = true;
    static readonly propertyName = PropertyName.defect_formation_energy;
    static readonly propertyType = PropertyType.scalar;
    constructor(config: Omit<Schema, "name">);
}
export {};
