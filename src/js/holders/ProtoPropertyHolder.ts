import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import {
    type ProtoPropertyHolderMixin,
    protoPropertyHolderMixin,
} from "./mixins/ProtoPropertyHolderMixin";

type Schema = ProtoPropertyHolderSchema;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProtoPropertyHolder extends ProtoPropertyHolderMixin {}

class ProtoPropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {}

protoPropertyHolderMixin(ProtoPropertyHolder.prototype);

export default ProtoPropertyHolder;
