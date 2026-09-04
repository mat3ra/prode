import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, ImprintPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ImprintPropertySchemaMixin = Omit<
    ImprintPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ImprintPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ImprintPropertySchemaMixin
>;

export function imprintPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ImprintPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ImprintPropertySchemaMixin> & ImprintPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ImprintPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ImprintPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get field() {
            return this.requiredProp("field");
        },
        set field(value: ImprintPropertySchema["field"]) {
            this.setProp("field", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ImprintPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
