import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type SurfaceEnergyPropertySchemaMixin = Omit<SurfaceEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type SurfaceEnergyPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & SurfaceEnergyPropertySchemaMixin>;
export declare function surfaceEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & SurfaceEnergyPropertySchemaMixin;
