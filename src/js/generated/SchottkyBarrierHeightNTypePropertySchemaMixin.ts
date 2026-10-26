import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    SchottkyBarrierHeightNTypePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type SchottkyBarrierHeightNTypePropertySchemaMixin = Omit<
    SchottkyBarrierHeightNTypePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type SchottkyBarrierHeightNTypePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & SchottkyBarrierHeightNTypePropertySchemaMixin
>;

export function schottkyBarrierHeightNTypePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & SchottkyBarrierHeightNTypePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<SchottkyBarrierHeightNTypePropertySchemaMixin> &
        SchottkyBarrierHeightNTypePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: SchottkyBarrierHeightNTypePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: SchottkyBarrierHeightNTypePropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: SchottkyBarrierHeightNTypePropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
