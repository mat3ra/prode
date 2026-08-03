import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    DefectFormationEnergyPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type DefectFormationEnergyPropertySchemaMixin = Omit<
    DefectFormationEnergyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type DefectFormationEnergyPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & DefectFormationEnergyPropertySchemaMixin
>;

export function defectFormationEnergyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & DefectFormationEnergyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<DefectFormationEnergyPropertySchemaMixin> &
        DefectFormationEnergyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: DefectFormationEnergyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: DefectFormationEnergyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: DefectFormationEnergyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
