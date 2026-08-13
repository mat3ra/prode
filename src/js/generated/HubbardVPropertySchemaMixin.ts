import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    HubbardVParametersPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type HubbardVPropertySchemaMixin = Omit<
    HubbardVParametersPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HubbardVPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & HubbardVPropertySchemaMixin
>;

export function hubbardVPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & HubbardVPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<HubbardVPropertySchemaMixin> & HubbardVPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: HubbardVParametersPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: HubbardVParametersPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: HubbardVParametersPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
