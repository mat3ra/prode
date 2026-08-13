import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, PressurePropertySchema } from "@mat3ra/esse/dist/js/types";

export type PressurePropertySchemaMixin = Omit<
    PressurePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PressurePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & PressurePropertySchemaMixin
>;

export function pressurePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PressurePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<PressurePropertySchemaMixin> & PressurePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: PressurePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: PressurePropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: PressurePropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
