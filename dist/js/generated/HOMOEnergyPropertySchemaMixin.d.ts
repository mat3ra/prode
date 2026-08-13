import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, HOMOEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HOMOEnergyPropertySchemaMixin = Omit<HOMOEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HOMOEnergyPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & HOMOEnergyPropertySchemaMixin>;
export declare function hOMOEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & HOMOEnergyPropertySchemaMixin;
