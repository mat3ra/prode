import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BandGapsPropertySchema, BaseInMemoryEntitySchema } from "@mat3ra/esse/dist/js/types";
export type BandGapsPropertySchemaMixin = Omit<BandGapsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type BandGapsPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & BandGapsPropertySchemaMixin>;
export declare function bandGapsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & BandGapsPropertySchemaMixin;
