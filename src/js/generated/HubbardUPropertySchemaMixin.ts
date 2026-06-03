import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { HubbardUParametersPropertySchema } from "@mat3ra/esse/dist/js/types";

export type HubbardUPropertySchemaMixin = Omit<
    HubbardUParametersPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HubbardUPropertyInMemoryEntity = InMemoryEntity & HubbardUPropertySchemaMixin;

export function hubbardUPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & HubbardUPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<HubbardUPropertySchemaMixin> & HubbardUPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: HubbardUParametersPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: HubbardUParametersPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: HubbardUParametersPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
