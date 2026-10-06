import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, GrainCoverageSchema } from "@mat3ra/esse/dist/js/types";

export type GrainCoveragePropertySchemaMixin = Omit<
    GrainCoverageSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type GrainCoveragePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & GrainCoveragePropertySchemaMixin
>;

export function grainCoveragePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & GrainCoveragePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<GrainCoveragePropertySchemaMixin> &
        GrainCoveragePropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: GrainCoverageSchema["name"]) {
            this.setProp("name", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: GrainCoverageSchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
