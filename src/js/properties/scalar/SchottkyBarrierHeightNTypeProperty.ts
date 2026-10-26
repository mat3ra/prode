import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { SchottkyBarrierHeightNTypePropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    SchottkyBarrierHeightNTypePropertySchemaMixin,
    schottkyBarrierHeightNTypePropertySchemaMixin,
} from "../../generated/SchottkyBarrierHeightNTypePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = SchottkyBarrierHeightNTypePropertySchema;

type Base = typeof Property<Schema> & Constructor<SchottkyBarrierHeightNTypePropertySchemaMixin>;

class SchottkyBarrierHeightNTypeProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.schottky_barrier_height_n;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: SchottkyBarrierHeightNTypeProperty.propertyName });
    }
}

schottkyBarrierHeightNTypePropertySchemaMixin(SchottkyBarrierHeightNTypeProperty.prototype);

export default SchottkyBarrierHeightNTypeProperty;
