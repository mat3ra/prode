import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { AtomicLabelsPropertySchema } from "@mat3ra/esse/dist/js/types";

import {
    type AtomicLabelsPropertySchemaMixin,
    atomicLabelsPropertySchemaMixin,
} from "../generated/AtomicLabelsPropertySchemaMixin";
import ProtoProperty from "../ProtoProperty";
import { PropertyName } from "../settings";

type Schema = AtomicLabelsPropertySchema;

type Base = typeof ProtoProperty<Schema> & Constructor<AtomicLabelsPropertySchemaMixin>;

class AtomicLabelsProperty extends (ProtoProperty as Base) implements Schema {
    static readonly propertyName = PropertyName.atomic_labels;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: AtomicLabelsProperty.propertyName });
    }
}

atomicLabelsPropertySchemaMixin(AtomicLabelsProperty.prototype);

export default AtomicLabelsProperty;
