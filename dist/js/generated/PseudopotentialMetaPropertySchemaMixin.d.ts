import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, FileDataItem } from "@mat3ra/esse/dist/js/types";
export type PseudopotentialMetaPropertySchemaMixin = Omit<FileDataItem, "_id" | "slug" | "systemName" | "schemaVersion">;
export type PseudopotentialMetaPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & PseudopotentialMetaPropertySchemaMixin>;
export declare function pseudopotentialMetaPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & PseudopotentialMetaPropertySchemaMixin;
