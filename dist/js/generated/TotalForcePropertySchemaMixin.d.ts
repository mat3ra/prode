import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, TotalForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type TotalForcePropertySchemaMixin = Omit<TotalForcesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type TotalForcePropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & TotalForcePropertySchemaMixin>;
export declare function totalForcePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & TotalForcePropertySchemaMixin;
