import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FermiEnergyPropertySchemaMixin = Omit<
    FermiEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function fermiEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FermiEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<FermiEnergyPropertySchemaMixin> &
        FermiEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: FermiEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: FermiEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: FermiEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
