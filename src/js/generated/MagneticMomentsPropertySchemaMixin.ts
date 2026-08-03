import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    MagneticMomentsPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type MagneticMomentsPropertySchemaMixin = Omit<
    MagneticMomentsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type MagneticMomentsPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & MagneticMomentsPropertySchemaMixin
>;

export function magneticMomentsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & MagneticMomentsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<MagneticMomentsPropertySchemaMixin> &
        MagneticMomentsPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: MagneticMomentsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: MagneticMomentsPropertySchema["values"]) {
            this.setProp("values", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: MagneticMomentsPropertySchema["units"]) {
            this.setProp("units", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
