import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    CurrentVoltageCurvePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type CurrentVoltageCurvePropertySchemaMixin = Omit<
    CurrentVoltageCurvePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type CurrentVoltageCurvePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & CurrentVoltageCurvePropertySchemaMixin
>;

export function currentVoltageCurvePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & CurrentVoltageCurvePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<CurrentVoltageCurvePropertySchemaMixin> &
        CurrentVoltageCurvePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: CurrentVoltageCurvePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: CurrentVoltageCurvePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: CurrentVoltageCurvePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: CurrentVoltageCurvePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: CurrentVoltageCurvePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
