import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type SurfaceEnergyPropertySchemaMixin = Omit<
    SurfaceEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function surfaceEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & SurfaceEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<SurfaceEnergyPropertySchemaMixin> &
        SurfaceEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: SurfaceEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: SurfaceEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: SurfaceEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
