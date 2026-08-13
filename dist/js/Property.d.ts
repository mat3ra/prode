import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { AnyObject } from "@mat3ra/esse/dist/js/esse/types";
import type { BaseInMemoryEntitySchema, PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyName, PropertyType } from "./settings";
export type PropertySchemaJSON = PropertyHolderSchema["data"] & AnyObject;
export type PropertyRowValue = PropertySchemaJSON & {
    slug?: string;
    group?: string;
};
declare class Property<TSchema extends object = object> extends InMemoryEntity<TSchema & BaseInMemoryEntitySchema> {
    name: `${PropertyName}`;
    static readonly propertyType: PropertyType;
    static readonly propertyName: PropertyName;
    static readonly isRefined: boolean;
    static readonly isConvergence: boolean;
    static readonly isAbleToReturnMultipleResults: boolean;
    toRowValues(group: string | undefined, slug: string | undefined): (TSchema & AnyObject & {
        slug?: string;
        group?: string;
    })[];
    static prettifyName(name: string): string;
}
export default Property;
