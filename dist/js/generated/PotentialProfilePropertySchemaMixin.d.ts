import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, PotentialProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type PotentialProfilePropertySchemaMixin = Omit<PotentialProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PotentialProfilePropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & PotentialProfilePropertySchemaMixin>;
export declare function potentialProfilePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & PotentialProfilePropertySchemaMixin;
