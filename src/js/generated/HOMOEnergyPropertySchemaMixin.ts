import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    HOMOEnergyPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type HOMOEnergyPropertySchemaMixin = Omit<
    HOMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type HOMOEnergyPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & HOMOEnergyPropertySchemaMixin
>;

export function hOMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & HOMOEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<HOMOEnergyPropertySchemaMixin> &
        HOMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: HOMOEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: HOMOEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: HOMOEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
