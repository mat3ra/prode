import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    ValenceBandOffsetPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type ValenceBandOffsetPropertySchemaMixin = Omit<
    ValenceBandOffsetPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ValenceBandOffsetPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ValenceBandOffsetPropertySchemaMixin
>;

export function valenceBandOffsetPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ValenceBandOffsetPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ValenceBandOffsetPropertySchemaMixin> &
        ValenceBandOffsetPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ValenceBandOffsetPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ValenceBandOffsetPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ValenceBandOffsetPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
