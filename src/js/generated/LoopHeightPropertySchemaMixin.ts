import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    LoopHeightPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type LoopHeightPropertySchemaMixin = Omit<
    LoopHeightPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type LoopHeightPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & LoopHeightPropertySchemaMixin
>;

export function loopHeightPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & LoopHeightPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<LoopHeightPropertySchemaMixin> &
        LoopHeightPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: LoopHeightPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: LoopHeightPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get field() {
            return this.requiredProp("field");
        },
        set field(value: LoopHeightPropertySchema["field"]) {
            this.setProp("field", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: LoopHeightPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
