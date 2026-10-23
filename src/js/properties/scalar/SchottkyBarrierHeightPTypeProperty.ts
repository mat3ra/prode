import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { SchottkyBarrierHeightPTypePropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    SchottkyBarrierHeightPTypePropertySchemaMixin,
    schottkyBarrierHeightPTypePropertySchemaMixin,
} from "../../generated/SchottkyBarrierHeightPTypePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = SchottkyBarrierHeightPTypePropertySchema;

type Base = typeof Property<Schema> & Constructor<SchottkyBarrierHeightPTypePropertySchemaMixin>;

class SchottkyBarrierHeightPTypeProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.schottky_barrier_height_p;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: SchottkyBarrierHeightPTypeProperty.propertyName });
    }
}

schottkyBarrierHeightPTypePropertySchemaMixin(SchottkyBarrierHeightPTypeProperty.prototype);

export default SchottkyBarrierHeightPTypeProperty;
