import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
export type MagneticMomentsPropertySchemaMixin = Omit<MagneticMomentsPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export declare function magneticMomentsPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & MagneticMomentsPropertySchemaMixin;
