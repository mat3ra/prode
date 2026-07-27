import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicConstraintsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type AtomicConstraintsPropertySchemaMixin = Omit<AtomicConstraintsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export declare function atomicConstraintsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & AtomicConstraintsPropertySchemaMixin;
