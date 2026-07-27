import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type AtomicForcesPropertySchemaMixin = Omit<
    AtomicForcesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function atomicForcesPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & AtomicForcesPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<AtomicForcesPropertySchemaMixin> &
        AtomicForcesPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: AtomicForcesPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: AtomicForcesPropertySchema["values"]) {
            this.setProp("values", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: AtomicForcesPropertySchema["units"]) {
            this.setProp("units", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
