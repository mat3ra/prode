import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AtomicForcesPropertySchema } from "@mat3ra/esse/dist/js/types";
export type AtomicForcesPropertySchemaMixin = Omit<AtomicForcesPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export declare function atomicForcesPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & AtomicForcesPropertySchemaMixin;
