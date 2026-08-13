import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, HubbardVNNParametersPropertySchema } from "@mat3ra/esse/dist/js/types";
export type HubbardVNNPropertySchemaMixin = Omit<HubbardVNNParametersPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type HubbardVNNPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & HubbardVNNPropertySchemaMixin>;
export declare function hubbardVNNPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & HubbardVNNPropertySchemaMixin;
