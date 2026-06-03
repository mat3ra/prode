import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

export type PropertyHolderSchemaMixin = Omit<
    PropertyHolderSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PropertyHolderInMemoryEntity = InMemoryEntity & PropertyHolderSchemaMixin;

export function propertyHolderSchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PropertyHolderSchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<PropertyHolderSchemaMixin> & PropertyHolderSchemaMixin = {
        get group() {
            return this.prop("group");
        },
        set group(value: PropertyHolderSchema["group"]) {
            this.setProp("group", value);
        },
        get data() {
            return this.requiredProp("data");
        },
        set data(value: PropertyHolderSchema["data"]) {
            this.setProp("data", value);
        },
        get source() {
            return this.requiredProp("source");
        },
        set source(value: PropertyHolderSchema["source"]) {
            this.setProp("source", value);
        },
        get exabyteId() {
            return this.requiredProp("exabyteId");
        },
        set exabyteId(value: PropertyHolderSchema["exabyteId"]) {
            this.setProp("exabyteId", value);
        },
        get precision() {
            return this.prop("precision");
        },
        set precision(value: PropertyHolderSchema["precision"]) {
            this.setProp("precision", value);
        },
        get systemTags() {
            return this.prop("systemTags");
        },
        set systemTags(value: PropertyHolderSchema["systemTags"]) {
            this.setProp("systemTags", value);
        },
        get repetition() {
            return this.requiredProp("repetition");
        },
        set repetition(value: PropertyHolderSchema["repetition"]) {
            this.setProp("repetition", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
