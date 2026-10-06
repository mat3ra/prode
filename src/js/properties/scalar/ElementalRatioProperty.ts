import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { ElementalRatio } from "@mat3ra/esse/dist/js/types";

import {
    ElementalRatioPropertySchemaMixin,
    elementalRatioPropertySchemaMixin,
} from "../../generated/ElementalRatioPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = ElementalRatio;

type Base = typeof Property<Schema> & Constructor<ElementalRatioPropertySchemaMixin>;

export default class ElementalRatioProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.elemental_ratio;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: ElementalRatioProperty.propertyName });
    }
}

elementalRatioPropertySchemaMixin(ElementalRatioProperty.prototype);
