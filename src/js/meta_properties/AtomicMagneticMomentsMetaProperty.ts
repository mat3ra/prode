import type { AtomicMagneticMomentsPropertySchema as Schema } from "@mat3ra/esse/dist/js/types";

import {
    type AtomicMagneticMomentsMetaPropertySchemaMixin,
    atomicMagneticMomentsMetaPropertySchemaMixin,
} from "../generated/AtomicMagneticMomentsMetaPropertySchemaMixin";
import MetaProperty from "../MetaProperty";
import { PropertyName, PropertyType } from "../settings";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AtomicMagneticMomentsMetaProperty extends AtomicMagneticMomentsMetaPropertySchemaMixin {}

class AtomicMagneticMomentsMetaProperty extends MetaProperty<Schema> implements Schema {
    static readonly propertyName = PropertyName.atomic_magnetic_moments;

    static readonly propertyType = PropertyType.non_scalar;

    readonly name = PropertyName.atomic_magnetic_moments;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicMagneticMomentsMetaProperty.propertyName });
    }
}

atomicMagneticMomentsMetaPropertySchemaMixin(AtomicMagneticMomentsMetaProperty.prototype);

export default AtomicMagneticMomentsMetaProperty;
