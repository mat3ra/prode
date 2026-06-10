import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FormationEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { FormationEnergyContributionsPropertySchemaMixin } from "../../generated/FormationEnergyContributionsPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
type Schema = FormationEnergyContributionsPropertySchema;
type Base = typeof Property<Schema> & Constructor<FormationEnergyContributionsPropertySchemaMixin>;
declare const PropertyBase: Base;
export default class FormationEnergyContributionsProperty extends PropertyBase implements Schema {
    static readonly propertyType = PropertyType.array_of_objects;
    static readonly propertyName = PropertyName.formation_energy_contributions;
    constructor(config: Omit<Schema, "name">);
}
export {};
