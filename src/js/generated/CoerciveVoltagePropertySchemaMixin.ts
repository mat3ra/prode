import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    CoerciveVoltagePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type CoerciveVoltagePropertySchemaMixin = Omit<
    CoerciveVoltagePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type CoerciveVoltagePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & CoerciveVoltagePropertySchemaMixin
>;

export function coerciveVoltagePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & CoerciveVoltagePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<CoerciveVoltagePropertySchemaMixin> &
        CoerciveVoltagePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: CoerciveVoltagePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: CoerciveVoltagePropertySchema["units"]) {
            this.setProp("units", value);
        },
        get field() {
            return this.requiredProp("field");
        },
        set field(value: CoerciveVoltagePropertySchema["field"]) {
            this.setProp("field", value);
        },
        get branch() {
            return this.requiredProp("branch");
        },
        set branch(value: CoerciveVoltagePropertySchema["branch"]) {
            this.setProp("branch", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: CoerciveVoltagePropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
