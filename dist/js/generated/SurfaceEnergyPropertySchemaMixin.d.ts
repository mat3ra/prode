import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { SurfaceEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type SurfaceEnergyPropertySchemaMixin = Omit<SurfaceEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export declare function surfaceEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & SurfaceEnergyPropertySchemaMixin;
