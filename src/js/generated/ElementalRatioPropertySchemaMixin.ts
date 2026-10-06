import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, ElementalRatio } from "@mat3ra/esse/dist/js/types";

export type ElementalRatioPropertySchemaMixin = Omit<
    ElementalRatio,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ElementalRatioPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ElementalRatioPropertySchemaMixin
>;

export function elementalRatioPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ElementalRatioPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ElementalRatioPropertySchemaMixin> &
        ElementalRatioPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ElementalRatio["name"]) {
            this.setProp("name", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ElementalRatio["value"]) {
            this.setProp("value", value);
        },
        get element() {
            return this.prop("element");
        },
        set element(value: ElementalRatio["element"]) {
            this.setProp("element", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
