import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    ReactionEnergyBarrierPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type ReactionEnergyBarrierPropertySchemaMixin = Omit<
    ReactionEnergyBarrierPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ReactionEnergyBarrierPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & ReactionEnergyBarrierPropertySchemaMixin
>;

export function reactionEnergyBarrierPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ReactionEnergyBarrierPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ReactionEnergyBarrierPropertySchemaMixin> &
        ReactionEnergyBarrierPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ReactionEnergyBarrierPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ReactionEnergyBarrierPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: ReactionEnergyBarrierPropertySchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
