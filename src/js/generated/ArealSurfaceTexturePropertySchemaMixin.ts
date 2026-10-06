import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    ArealSurfaceTextureSchema,
    BaseInMemoryEntitySchema,
} from "@mat3ra/esse/dist/js/types";

export type ArealSurfaceTexturePropertySchemaMixin = Omit<
    ArealSurfaceTextureSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ArealSurfaceTexturePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ArealSurfaceTexturePropertySchemaMixin
>;

export function arealSurfaceTexturePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ArealSurfaceTexturePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ArealSurfaceTexturePropertySchemaMixin> &
        ArealSurfaceTexturePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ArealSurfaceTextureSchema["name"]) {
            this.setProp("name", value);
        },
        get parameter() {
            return this.requiredProp("parameter");
        },
        set parameter(value: ArealSurfaceTextureSchema["parameter"]) {
            this.setProp("parameter", value);
        },
        get units() {
            return this.prop("units");
        },
        set units(value: ArealSurfaceTextureSchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ArealSurfaceTextureSchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
