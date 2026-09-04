import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { LoopWidthPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    LoopWidthPropertySchemaMixin,
    loopWidthPropertySchemaMixin,
} from "../../generated/LoopWidthPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = LoopWidthPropertySchema;

type Base = typeof Property<Schema> & Constructor<LoopWidthPropertySchemaMixin>;

export default class LoopWidthProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.loop_width;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: LoopWidthProperty.propertyName });
    }
}

loopWidthPropertySchemaMixin(LoopWidthProperty.prototype);
