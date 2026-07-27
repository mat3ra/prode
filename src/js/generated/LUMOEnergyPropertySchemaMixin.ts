import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { LUMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type LUMOEnergyPropertySchemaMixin = Omit<
    LUMOEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function lUMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & LUMOEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<LUMOEnergyPropertySchemaMixin> &
        LUMOEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: LUMOEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: LUMOEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: LUMOEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
