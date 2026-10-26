import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    SchottkyBarrierHeightPTypePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type SchottkyBarrierHeightPTypePropertySchemaMixin = Omit<
    SchottkyBarrierHeightPTypePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type SchottkyBarrierHeightPTypePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & SchottkyBarrierHeightPTypePropertySchemaMixin
>;

export function schottkyBarrierHeightPTypePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & SchottkyBarrierHeightPTypePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<SchottkyBarrierHeightPTypePropertySchemaMixin> &
        SchottkyBarrierHeightPTypePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: SchottkyBarrierHeightPTypePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: SchottkyBarrierHeightPTypePropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: SchottkyBarrierHeightPTypePropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
