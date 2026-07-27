import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PhononDensityOfStatesPropertySchema } from "@mat3ra/esse/dist/js/types";

export type PhononDOSPropertySchemaMixin = Omit<
    PhononDensityOfStatesPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function phononDOSPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & PhononDOSPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<PhononDOSPropertySchemaMixin> & PhononDOSPropertySchemaMixin =
        {
            get xAxis() {
                return this.requiredProp("xAxis");
            },
            set xAxis(value: PhononDensityOfStatesPropertySchema["xAxis"]) {
                this.setProp("xAxis", value);
            },
            get yAxis() {
                return this.requiredProp("yAxis");
            },
            set yAxis(value: PhononDensityOfStatesPropertySchema["yAxis"]) {
                this.setProp("yAxis", value);
            },
            get name() {
                return this.requiredProp("name");
            },
            set name(value: PhononDensityOfStatesPropertySchema["name"]) {
                this.setProp("name", value);
            },
            get xDataArray() {
                return this.requiredProp("xDataArray");
            },
            set xDataArray(value: PhononDensityOfStatesPropertySchema["xDataArray"]) {
                this.setProp("xDataArray", value);
            },
            get yDataSeries() {
                return this.requiredProp("yDataSeries");
            },
            set yDataSeries(value: PhononDensityOfStatesPropertySchema["yDataSeries"]) {
                this.setProp("yDataSeries", value);
            },
        };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
