import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, InterfacialEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type InterfacialEnergyPropertySchemaMixin = Omit<InterfacialEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type InterfacialEnergyPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & InterfacialEnergyPropertySchemaMixin>;
export declare function interfacialEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & InterfacialEnergyPropertySchemaMixin;
