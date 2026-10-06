import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, GrainSizeSchema } from "@mat3ra/esse/dist/js/types";

export type GrainSizePropertySchemaMixin = Omit<
    GrainSizeSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type GrainSizePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & GrainSizePropertySchemaMixin
>;

export function grainSizePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & GrainSizePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<GrainSizePropertySchemaMixin> & GrainSizePropertySchemaMixin =
        {
            get name() {
                return this.requiredProp("name");
            },
            set name(value: GrainSizeSchema["name"]) {
                this.setProp("name", value);
            },
            get statistic() {
                return this.requiredProp("statistic");
            },
            set statistic(value: GrainSizeSchema["statistic"]) {
                this.setProp("statistic", value);
            },
            get units() {
                return this.prop("units");
            },
            set units(value: GrainSizeSchema["units"]) {
                this.setProp("units", value);
            },
            get value() {
                return this.requiredProp("value");
            },
            set value(value: GrainSizeSchema["value"]) {
                this.setProp("value", value);
            },
        };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
