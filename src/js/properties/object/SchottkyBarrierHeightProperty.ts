import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { SchottkyBarrierHeightPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    SchottkyBarrierHeightPropertySchemaMixin,
    schottkyBarrierHeightPropertySchemaMixin,
} from "../../generated/SchottkyBarrierHeightPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = SchottkyBarrierHeightPropertySchema;

type Base = typeof Property<Schema> & Constructor<SchottkyBarrierHeightPropertySchemaMixin>;

export default class SchottkyBarrierHeightProperty extends (Property as Base) implements Schema {
    static readonly propertyType = PropertyType.object;

    static readonly propertyName = PropertyName.schottky_barrier_height;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: SchottkyBarrierHeightProperty.propertyName });
    }
}

schottkyBarrierHeightPropertySchemaMixin(SchottkyBarrierHeightProperty.prototype);
