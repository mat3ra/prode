import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, ChargeDensityProfilePropertySchema } from "@mat3ra/esse/dist/js/types";
export type ChargeDensityProfilePropertySchemaMixin = Omit<ChargeDensityProfilePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ChargeDensityProfilePropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & ChargeDensityProfilePropertySchemaMixin>;
export declare function chargeDensityProfilePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & ChargeDensityProfilePropertySchemaMixin;
