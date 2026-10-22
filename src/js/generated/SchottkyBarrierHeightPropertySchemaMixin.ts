import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type {
    BaseInMemoryEntitySchema,
    SchottkyBarrierHeightPropertySchema,
} from "@mat3ra/esse/dist/js/types";

export type SchottkyBarrierHeightPropertySchemaMixin = Omit<
    SchottkyBarrierHeightPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type SchottkyBarrierHeightPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & SchottkyBarrierHeightPropertySchemaMixin
>;

export function schottkyBarrierHeightPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & SchottkyBarrierHeightPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<SchottkyBarrierHeightPropertySchemaMixin> &
        SchottkyBarrierHeightPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: SchottkyBarrierHeightPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: SchottkyBarrierHeightPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get pType() {
            return this.requiredProp("pType");
        },
        set pType(value: SchottkyBarrierHeightPropertySchema["pType"]) {
            this.setProp("pType", value);
        },
        get nType() {
            return this.requiredProp("nType");
        },
        set nType(value: SchottkyBarrierHeightPropertySchema["nType"]) {
            this.setProp("nType", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
