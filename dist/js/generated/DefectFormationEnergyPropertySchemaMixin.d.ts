import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DefectFormationEnergyPropertySchema } from "@mat3ra/esse/dist/js/types";
export type DefectFormationEnergyPropertySchemaMixin = Omit<DefectFormationEnergyPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type DefectFormationEnergyPropertyInMemoryEntity = InMemoryEntity & DefectFormationEnergyPropertySchemaMixin;
export declare function defectFormationEnergyPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & DefectFormationEnergyPropertySchemaMixin;
