import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { InterfacialEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type InterfacialEnergyPropertySchemaMixin = Omit<
    InterfacialEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function interfacialEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & InterfacialEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<InterfacialEnergyPropertySchemaMixin> &
        InterfacialEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: InterfacialEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: InterfacialEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: InterfacialEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
