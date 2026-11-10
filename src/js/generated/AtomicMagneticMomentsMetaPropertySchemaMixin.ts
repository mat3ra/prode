import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    AtomicMagneticMomentsPropertySchema,
    BaseInMemoryEntitySchema,
} from "@mat3ra/esse/dist/js/types";

export type AtomicMagneticMomentsMetaPropertySchemaMixin = Omit<
    AtomicMagneticMomentsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type AtomicMagneticMomentsMetaPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & AtomicMagneticMomentsMetaPropertySchemaMixin
>;

export function atomicMagneticMomentsMetaPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & AtomicMagneticMomentsMetaPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<AtomicMagneticMomentsMetaPropertySchemaMixin> &
        AtomicMagneticMomentsMetaPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: AtomicMagneticMomentsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: AtomicMagneticMomentsPropertySchema["values"]) {
            this.setProp("values", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: AtomicMagneticMomentsPropertySchema["units"]) {
            this.setProp("units", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
