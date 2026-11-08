import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    StartingMagnetizationPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type StartingMagnetizationMetaPropertySchemaMixin = Omit<
    StartingMagnetizationPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type StartingMagnetizationMetaPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & StartingMagnetizationMetaPropertySchemaMixin
>;

export function startingMagnetizationMetaPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & StartingMagnetizationMetaPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<StartingMagnetizationMetaPropertySchemaMixin> &
        StartingMagnetizationMetaPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: StartingMagnetizationPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: StartingMagnetizationPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
