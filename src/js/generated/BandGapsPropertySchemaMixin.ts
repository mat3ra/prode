import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandGapsPropertySchema, BaseInMemoryEntitySchema } from "@mat3ra/esse/dist/js/types";

export type BandGapsPropertySchemaMixin = Omit<
    BandGapsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type BandGapsPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & BandGapsPropertySchemaMixin
>;

export function bandGapsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & BandGapsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<BandGapsPropertySchemaMixin> & BandGapsPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: BandGapsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: BandGapsPropertySchema["values"]) {
            this.setProp("values", value);
        },
        get eigenvalues() {
            return this.prop("eigenvalues");
        },
        set eigenvalues(value: BandGapsPropertySchema["eigenvalues"]) {
            this.setProp("eigenvalues", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
