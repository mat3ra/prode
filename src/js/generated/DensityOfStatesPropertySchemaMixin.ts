import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type DensityOfStatesPropertySchemaMixin = Omit<
    DensityOfStatesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function densityOfStatesPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & DensityOfStatesPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<DensityOfStatesPropertySchemaMixin> &
        DensityOfStatesPropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: DensityOfStatesPropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: DensityOfStatesPropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: DensityOfStatesPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get legend() {
            return this.requiredProp("legend");
        },
        set legend(value: DensityOfStatesPropertySchema["legend"]) {
            this.setProp("legend", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: DensityOfStatesPropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: DensityOfStatesPropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
