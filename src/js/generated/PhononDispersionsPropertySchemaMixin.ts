import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononBandStructurePropertySchema } from "@mat3ra/esse/dist/js/types";

export type PhononDispersionsPropertySchemaMixin = Omit<
    PhononBandStructurePropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type PhononDispersionsPropertyInMemoryEntity = InMemoryEntity &
    PhononDispersionsPropertySchemaMixin;

export function phononDispersionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PhononDispersionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<PhononDispersionsPropertySchemaMixin> &
        PhononDispersionsPropertySchemaMixin = {
        get xAxis() {
            return this.requiredProp("xAxis");
        },
        set xAxis(value: PhononBandStructurePropertySchema["xAxis"]) {
            this.setProp("xAxis", value);
        },
        get yAxis() {
            return this.requiredProp("yAxis");
        },
        set yAxis(value: PhononBandStructurePropertySchema["yAxis"]) {
            this.setProp("yAxis", value);
        },
        get name() {
            return this.requiredProp("name");
        },
        set name(value: PhononBandStructurePropertySchema["name"]) {
            this.setProp("name", value);
        },
        get xDataArray() {
            return this.requiredProp("xDataArray");
        },
        set xDataArray(value: PhononBandStructurePropertySchema["xDataArray"]) {
            this.setProp("xDataArray", value);
        },
        get yDataSeries() {
            return this.requiredProp("yDataSeries");
        },
        set yDataSeries(value: PhononBandStructurePropertySchema["yDataSeries"]) {
            this.setProp("yDataSeries", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
