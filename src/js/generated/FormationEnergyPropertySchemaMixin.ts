import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FormationEnergyPropertySchemaMixin = Omit<
    FormationEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function formationEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FormationEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<FormationEnergyPropertySchemaMixin> &
        FormationEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: FormationEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: FormationEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: FormationEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
