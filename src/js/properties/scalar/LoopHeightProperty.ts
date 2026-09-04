import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { LoopHeightPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    LoopHeightPropertySchemaMixin,
    loopHeightPropertySchemaMixin,
} from "../../generated/LoopHeightPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = LoopHeightPropertySchema;

type Base = typeof Property<Schema> & Constructor<LoopHeightPropertySchemaMixin>;

export default class LoopHeightProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.loop_height;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: LoopHeightProperty.propertyName });
    }
}

loopHeightPropertySchemaMixin(LoopHeightProperty.prototype);
