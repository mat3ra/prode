import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    WavefunctionAmplitudePropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type WavefunctionAmplitudePropertySchemaMixin = Omit<
    WavefunctionAmplitudePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type WavefunctionAmplitudePropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & WavefunctionAmplitudePropertySchemaMixin
>;

export function wavefunctionAmplitudePropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & WavefunctionAmplitudePropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<WavefunctionAmplitudePropertySchemaMixin> &
        WavefunctionAmplitudePropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: WavefunctionAmplitudePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: WavefunctionAmplitudePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: WavefunctionAmplitudePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: WavefunctionAmplitudePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: WavefunctionAmplitudePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
