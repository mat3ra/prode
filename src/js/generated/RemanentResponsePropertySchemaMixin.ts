import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    RemanentResponsePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type RemanentResponsePropertySchemaMixin = Omit<
    RemanentResponsePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type RemanentResponsePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & RemanentResponsePropertySchemaMixin
>;

export function remanentResponsePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & RemanentResponsePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<RemanentResponsePropertySchemaMixin> &
        RemanentResponsePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: RemanentResponsePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: RemanentResponsePropertySchema["units"]) {
            this.setProp("units", value);
        },
        get field() {
            return this.requiredProp("field");
        },
        set field(value: RemanentResponsePropertySchema["field"]) {
            this.setProp("field", value);
        },
        get branch() {
            return this.requiredProp("branch");
        },
        set branch(value: RemanentResponsePropertySchema["branch"]) {
            this.setProp("branch", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: RemanentResponsePropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
