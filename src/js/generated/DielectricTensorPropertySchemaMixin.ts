import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { DielectricTensorPropertySchema } from "@mat3ra/esse/dist/js/types";

export type DielectricTensorPropertySchemaMixin = Omit<
    DielectricTensorPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function dielectricTensorPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & DielectricTensorPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<DielectricTensorPropertySchemaMixin> &
        DielectricTensorPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: DielectricTensorPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get values() {
            return this.requiredProp("values");
        },
        set values(value: DielectricTensorPropertySchema["values"]) {
            this.setProp("values", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
