import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ZeroPointEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ZeroPointEnergyPropertySchemaMixin = Omit<
    ZeroPointEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ZeroPointEnergyPropertyInMemoryEntity = InMemoryEntity &
    ZeroPointEnergyPropertySchemaMixin;

export function zeroPointEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ZeroPointEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ZeroPointEnergyPropertySchemaMixin> &
        ZeroPointEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ZeroPointEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ZeroPointEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ZeroPointEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
