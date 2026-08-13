import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicConstraintsPropertySchema, BaseInMemoryEntitySchema } from "@mat3ra/esse/dist/js/types";
export type AtomicConstraintsPropertySchemaMixin = Omit<AtomicConstraintsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type AtomicConstraintsPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & AtomicConstraintsPropertySchemaMixin>;
export declare function atomicConstraintsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & AtomicConstraintsPropertySchemaMixin;
