import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";

export type ChargeDensityProfilePropertySchemaMixin = Omit<
    ChargeDensityProfilePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ChargeDensityProfilePropertyInMemoryEntity = InMemoryEntity &
    ChargeDensityProfilePropertySchemaMixin;

export function chargeDensityProfilePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ChargeDensityProfilePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ChargeDensityProfilePropertySchemaMixin> &
        ChargeDensityProfilePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: ChargeDensityProfilePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: ChargeDensityProfilePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ChargeDensityProfilePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: ChargeDensityProfilePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: ChargeDensityProfilePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
