import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicLabelsSchema, BaseInMemoryEntitySchema } from "@mat3ra/esse/dist/js/types";

export type AtomicLabelsPropertySchemaMixin = Omit<
    AtomicLabelsSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type AtomicLabelsPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & AtomicLabelsPropertySchemaMixin
>;

export function atomicLabelsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & AtomicLabelsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<AtomicLabelsPropertySchemaMixin> &
        AtomicLabelsPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: AtomicLabelsSchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: AtomicLabelsSchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
