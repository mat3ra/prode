import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    IonizationPotentialElementalPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type IonizationPotentialElementalPropertySchemaMixin = Omit<
    IonizationPotentialElementalPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type IonizationPotentialElementalPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & IonizationPotentialElementalPropertySchemaMixin
>;

export function ionizationPotentialElementalPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & IonizationPotentialElementalPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<IonizationPotentialElementalPropertySchemaMixin> &
        IonizationPotentialElementalPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: IonizationPotentialElementalPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: IonizationPotentialElementalPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: IonizationPotentialElementalPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
