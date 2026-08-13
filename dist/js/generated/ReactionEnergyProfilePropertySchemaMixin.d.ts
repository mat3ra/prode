import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, ReactionEnergyProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type ReactionEnergyProfilePropertySchemaMixin = Omit<ReactionEnergyProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ReactionEnergyProfilePropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & ReactionEnergyProfilePropertySchemaMixin>;
export declare function reactionEnergyProfilePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & ReactionEnergyProfilePropertySchemaMixin;
