import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { RemanentResponsePropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    RemanentResponsePropertySchemaMixin,
    remanentResponsePropertySchemaMixin,
} from "../../generated/RemanentResponsePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = RemanentResponsePropertySchema;

type Base = typeof Property<Schema> & Constructor<RemanentResponsePropertySchemaMixin>;

export default class RemanentResponseProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.remanent_response;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: RemanentResponseProperty.propertyName });
    }
}

remanentResponsePropertySchemaMixin(RemanentResponseProperty.prototype);
