import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AveragePotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";

export type AveragePotentialProfilePropertySchemaMixin = Omit<
    AveragePotentialProfilePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type AveragePotentialProfilePropertyInMemoryEntity = InMemoryEntity &
    AveragePotentialProfilePropertySchemaMixin;

export function averagePotentialProfilePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & AveragePotentialProfilePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<AveragePotentialProfilePropertySchemaMixin> &
        AveragePotentialProfilePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: AveragePotentialProfilePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: AveragePotentialProfilePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: AveragePotentialProfilePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: AveragePotentialProfilePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: AveragePotentialProfilePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
