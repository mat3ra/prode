import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    BoundaryConditionsPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type BoundaryConditionsPropertySchemaMixin = Omit<
    BoundaryConditionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type BoundaryConditionsPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & BoundaryConditionsPropertySchemaMixin
>;

export function boundaryConditionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & BoundaryConditionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<BoundaryConditionsPropertySchemaMixin> &
        BoundaryConditionsPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: BoundaryConditionsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get type() {
            return this.requiredProp("type");
        },
        set type(value: BoundaryConditionsPropertySchema["type"]) {
            this.setProp("type", value);
        },
        get offset() {
            return this.requiredProp("offset");
        },
        set offset(value: BoundaryConditionsPropertySchema["offset"]) {
            this.setProp("offset", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
