import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    StartingMagnetizationPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type StartingMagnetizationPropertySchemaMixin = Omit<
    StartingMagnetizationPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type StartingMagnetizationPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & StartingMagnetizationPropertySchemaMixin
>;

export function startingMagnetizationPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & StartingMagnetizationPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<StartingMagnetizationPropertySchemaMixin> &
        StartingMagnetizationPropertySchemaMixin = {
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
