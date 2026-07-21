import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { DefectFormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    DefectFormationEnergyPropertySchemaMixin,
    defectFormationEnergyPropertySchemaMixin,
} from "../../generated/DefectFormationEnergyPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = DefectFormationEnergyPropertySchema;

type Base = typeof Property<Schema> & Constructor<DefectFormationEnergyPropertySchemaMixin>;

export default class DefectFormationEnergyProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.defect_formation_energy;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: DefectFormationEnergyProperty.propertyName });
    }
}

defectFormationEnergyPropertySchemaMixin(DefectFormationEnergyProperty.prototype);
