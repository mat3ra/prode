import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    ConvergenceElectronicPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type ConvergenceElectronicPropertySchemaMixin = Omit<
    ConvergenceElectronicPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ConvergenceElectronicPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ConvergenceElectronicPropertySchemaMixin
>;

export function convergenceElectronicPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ConvergenceElectronicPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ConvergenceElectronicPropertySchemaMixin> &
        ConvergenceElectronicPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ConvergenceElectronicPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ConvergenceElectronicPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get data() {
            return this.requiredProp("data");
        },
        set data(value: ConvergenceElectronicPropertySchema["data"]) {
            this.setProp("data", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
