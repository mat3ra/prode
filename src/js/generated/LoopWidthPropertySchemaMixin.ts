import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, LoopWidthPropertySchema } from "@mat3ra/esse/dist/js/types";

export type LoopWidthPropertySchemaMixin = Omit<
    LoopWidthPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type LoopWidthPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & LoopWidthPropertySchemaMixin
>;

export function loopWidthPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & LoopWidthPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<LoopWidthPropertySchemaMixin> & LoopWidthPropertySchemaMixin =
        {
            get name() {
                return this.requiredProp("name");
            },
            set name(value: LoopWidthPropertySchema["name"]) {
                this.setProp("name", value);
            },
            get units() {
                return this.requiredProp("units");
            },
            set units(value: LoopWidthPropertySchema["units"]) {
                this.setProp("units", value);
            },
            get field() {
                return this.requiredProp("field");
            },
            set field(value: LoopWidthPropertySchema["field"]) {
                this.setProp("field", value);
            },
            get value() {
                return this.requiredProp("value");
            },
            set value(value: LoopWidthPropertySchema["value"]) {
                this.setProp("value", value);
            },
        };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
