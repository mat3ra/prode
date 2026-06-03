import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { IsRelaxedPropertySchema } from "@mat3ra/esse/dist/js/types";

export type IsRelaxedPropertySchemaMixin = Omit<
    IsRelaxedPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type IsRelaxedPropertyInMemoryEntity = InMemoryEntity & IsRelaxedPropertySchemaMixin;

export function isRelaxedPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & IsRelaxedPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<IsRelaxedPropertySchemaMixin> & IsRelaxedPropertySchemaMixin =
        {
            get name() {
                return this.requiredProp("name");
            },
            set name(value: IsRelaxedPropertySchema["name"]) {
                this.setProp("name", value);
            },
            get value() {
                return this.requiredProp("value");
            },
            set value(value: IsRelaxedPropertySchema["value"]) {
                this.setProp("value", value);
            },
            get materialId() {
                return this.requiredProp("materialId");
            },
            set materialId(value: IsRelaxedPropertySchema["materialId"]) {
                this.setProp("materialId", value);
            },
        };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
