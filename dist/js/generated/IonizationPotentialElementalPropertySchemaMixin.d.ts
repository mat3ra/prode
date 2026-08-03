import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, IonizationPotentialElementalPropertySchema } from "@mat3ra/esse/dist/js/types";
export type IonizationPotentialElementalPropertySchemaMixin = Omit<IonizationPotentialElementalPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type IonizationPotentialElementalPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & IonizationPotentialElementalPropertySchemaMixin>;
export declare function ionizationPotentialElementalPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & IonizationPotentialElementalPropertySchemaMixin;
