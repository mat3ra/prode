import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";

export type PotentialProfilePropertySchemaMixin = Omit<
    PotentialProfilePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PotentialProfilePropertyInMemoryEntity = InMemoryEntity &
    PotentialProfilePropertySchemaMixin;

export function potentialProfilePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PotentialProfilePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<PotentialProfilePropertySchemaMixin> &
        PotentialProfilePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: PotentialProfilePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: PotentialProfilePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: PotentialProfilePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: PotentialProfilePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: PotentialProfilePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
