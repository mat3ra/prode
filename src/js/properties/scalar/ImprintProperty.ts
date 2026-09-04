import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ImprintPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    ImprintPropertySchemaMixin,
    imprintPropertySchemaMixin,
} from "../../generated/ImprintPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ImprintPropertySchema;

type Base = typeof Property<Schema> & Constructor<ImprintPropertySchemaMixin>;

export default class ImprintProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.imprint;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ImprintProperty.propertyName });
    }
}

imprintPropertySchemaMixin(ImprintProperty.prototype);
