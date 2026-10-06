import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { GrainCoverageSchema } from "@mat3ra/esse/dist/js/types";

import {
    GrainCoveragePropertySchemaMixin,
    grainCoveragePropertySchemaMixin,
} from "../../generated/GrainCoveragePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = GrainCoverageSchema;

type Base = typeof Property<Schema> & Constructor<GrainCoveragePropertySchemaMixin>;

export default class GrainCoverageProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.grain_coverage;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: GrainCoverageProperty.propertyName });
    }
}

grainCoveragePropertySchemaMixin(GrainCoverageProperty.prototype);
