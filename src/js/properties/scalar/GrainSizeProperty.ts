import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { GrainSizeSchema } from "@mat3ra/esse/dist/js/types";

import {
    GrainSizePropertySchemaMixin,
    grainSizePropertySchemaMixin,
} from "../../generated/GrainSizePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = GrainSizeSchema;

type Base = typeof Property<Schema> & Constructor<GrainSizePropertySchemaMixin>;

export default class GrainSizeProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.grain_size;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: GrainSizeProperty.propertyName });
    }
}

grainSizePropertySchemaMixin(GrainSizeProperty.prototype);
