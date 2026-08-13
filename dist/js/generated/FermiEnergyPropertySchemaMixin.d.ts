import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, FermiEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type FermiEnergyPropertySchemaMixin = Omit<FermiEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type FermiEnergyPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & FermiEnergyPropertySchemaMixin>;
export declare function fermiEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & FermiEnergyPropertySchemaMixin;
