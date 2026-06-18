import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";

export type FormationEnergyContributionsPropertySchemaMixin = Omit<
    FormationEnergyContributionsPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FormationEnergyContributionsPropertyInMemoryEntity = InMemoryEntity &
    FormationEnergyContributionsPropertySchemaMixin;

export function formationEnergyContributionsPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FormationEnergyContributionsPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<FormationEnergyContributionsPropertySchemaMixin> &
        FormationEnergyContributionsPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: FormationEnergyContributionsPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: FormationEnergyContributionsPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
