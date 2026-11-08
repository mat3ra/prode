import type { StartingMagnetizationPropertySchema as Schema } from "@mat3ra/esse/dist/js/types";

import {
    type StartingMagnetizationMetaPropertySchemaMixin,
    startingMagnetizationMetaPropertySchemaMixin,
} from "../generated/StartingMagnetizationMetaPropertySchemaMixin";
import MetaProperty from "../MetaProperty";
import { PropertyName, PropertyType } from "../settings";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StartingMagnetizationMetaProperty extends StartingMagnetizationMetaPropertySchemaMixin {}

class StartingMagnetizationMetaProperty extends MetaProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.starting_magnetization;

    static readonly propertyType = PropertyType.non_scalar;

    readonly name = PropertyName.starting_magnetization;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: StartingMagnetizationMetaProperty.propertyName });
    }
}

startingMagnetizationMetaPropertySchemaMixin(StartingMagnetizationMetaProperty.prototype);

export default StartingMagnetizationMetaProperty;
