import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, BoundaryConditionsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type BoundaryConditionsPropertySchemaMixin = Omit<BoundaryConditionsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type BoundaryConditionsPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & BoundaryConditionsPropertySchemaMixin>;
export declare function boundaryConditionsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & BoundaryConditionsPropertySchemaMixin;
