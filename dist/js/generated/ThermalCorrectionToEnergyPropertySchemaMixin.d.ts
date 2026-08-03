import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, ThermalCorrectionToEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type ThermalCorrectionToEnergyPropertySchemaMixin = Omit<ThermalCorrectionToEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type ThermalCorrectionToEnergyPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & ThermalCorrectionToEnergyPropertySchemaMixin>;
export declare function thermalCorrectionToEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & ThermalCorrectionToEnergyPropertySchemaMixin;
