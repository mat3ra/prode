import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { FormationEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FormationEnergyContributionsPropertySchemaMixin = Omit<FormationEnergyContributionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export declare function formationEnergyContributionsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & FormationEnergyContributionsPropertySchemaMixin;
