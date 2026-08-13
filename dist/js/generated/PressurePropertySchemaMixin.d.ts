import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, PressurePropertySchema } from "@mat3ra/esse/dist/js/types";
export type PressurePropertySchemaMixin = Omit<PressurePropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PressurePropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & PressurePropertySchemaMixin>;
export declare function pressurePropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & PressurePropertySchemaMixin;
