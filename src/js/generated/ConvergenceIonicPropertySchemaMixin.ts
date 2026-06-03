import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ConvergenceIonicPropertySchema } from "@mat3ra/esse/dist/js/types";

export type ConvergenceIonicPropertySchemaMixin = Omit<
    ConvergenceIonicPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type ConvergenceIonicPropertyInMemoryEntity = InMemoryEntity &
    ConvergenceIonicPropertySchemaMixin;

export function convergenceIonicPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & ConvergenceIonicPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<ConvergenceIonicPropertySchemaMixin> &
        ConvergenceIonicPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: ConvergenceIonicPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get tolerance() {
            return this.prop("tolerance");
        },
        set tolerance(value: ConvergenceIonicPropertySchema["tolerance"]) {
            this.setProp("tolerance", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: ConvergenceIonicPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get data() {
            return this.requiredProp("data");
        },
        set data(value: ConvergenceIonicPropertySchema["data"]) {
            this.setProp("data", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
