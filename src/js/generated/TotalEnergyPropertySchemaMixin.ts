import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { TotalEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type TotalEnergyPropertySchemaMixin = Omit<
    TotalEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function totalEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & TotalEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<TotalEnergyPropertySchemaMixin> &
        TotalEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: TotalEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: TotalEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: TotalEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
