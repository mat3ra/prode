import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ArealSurfaceTextureSchema } from "@mat3ra/esse/dist/js/types";

import {
    ArealSurfaceTexturePropertySchemaMixin,
    arealSurfaceTexturePropertySchemaMixin,
} from "../../generated/ArealSurfaceTexturePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ArealSurfaceTextureSchema;

type Base = typeof Property<Schema> & Constructor<ArealSurfaceTexturePropertySchemaMixin>;

export default class ArealSurfaceTextureProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.areal_surface_texture;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ArealSurfaceTextureProperty.propertyName });
    }
}

arealSurfaceTexturePropertySchemaMixin(ArealSurfaceTextureProperty.prototype);
