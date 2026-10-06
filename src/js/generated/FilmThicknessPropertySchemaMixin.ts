import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, FilmThicknessSchema } from "@mat3ra/esse/dist/js/types";

export type FilmThicknessPropertySchemaMixin = Omit<
    FilmThicknessSchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type FilmThicknessPropertyInMemoryEntity = InMemoryEntity<
    BaseInMemoryEntitySchema & FilmThicknessPropertySchemaMixin
>;

export function filmThicknessPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & FilmThicknessPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<FilmThicknessPropertySchemaMixin> &
        FilmThicknessPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: FilmThicknessSchema["name"]) {
            this.setProp("name", value);
        },
        get units() {
            return this.prop("units");
        },
        set units(value: FilmThicknessSchema["units"]) {
            this.setProp("units", value);
        },
        get value() {
            return this.requiredProp("value");
        },
        set value(value: FilmThicknessSchema["value"]) {
            this.setProp("value", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
