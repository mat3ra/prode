import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    ThermalCorrectionToEnthalpyPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type ThermalCorrectionToEnthalpyPropertySchemaMixin = Omit<
    ThermalCorrectionToEnthalpyPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ThermalCorrectionToEnthalpyPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ThermalCorrectionToEnthalpyPropertySchemaMixin
>;

export function thermalCorrectionToEnthalpyPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ThermalCorrectionToEnthalpyPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ThermalCorrectionToEnthalpyPropertySchemaMixin> &
        ThermalCorrectionToEnthalpyPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ThermalCorrectionToEnthalpyPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ThermalCorrectionToEnthalpyPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ThermalCorrectionToEnthalpyPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
