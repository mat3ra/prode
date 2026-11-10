import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AtomicMagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    type AtomicMagneticMomentsPropertySchemaMixin,
    atomicMagneticMomentsPropertySchemaMixin,
} from "../generated/AtomicMagneticMomentsPropertySchemaMixin";
import ProtoProperty from "../ProtoProperty";
import { PropertyName } from "../settings";

type Schema = AtomicMagneticMomentsPropertySchema;

type Base = typeof ProtoProperty<Schema> & Constructor<AtomicMagneticMomentsPropertySchemaMixin>;

class AtomicMagneticMomentsProperty extends (ProtoProperty as Base) implements Schema {
    static readonly propertyName = PropertyName.atomic_magnetic_moments;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicMagneticMomentsProperty.propertyName });
    }
}

atomicMagneticMomentsPropertySchemaMixin(AtomicMagneticMomentsProperty.prototype);

export default AtomicMagneticMomentsProperty;
