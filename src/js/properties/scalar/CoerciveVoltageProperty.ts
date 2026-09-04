import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { CoerciveVoltagePropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    CoerciveVoltagePropertySchemaMixin,
    coerciveVoltagePropertySchemaMixin,
} from "../../generated/CoerciveVoltagePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = CoerciveVoltagePropertySchema;

type Base = typeof Property<Schema> & Constructor<CoerciveVoltagePropertySchemaMixin>;

export default class CoerciveVoltageProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.coercive_voltage;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: CoerciveVoltageProperty.propertyName });
    }
}

coerciveVoltagePropertySchemaMixin(CoerciveVoltageProperty.prototype);
