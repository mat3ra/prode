import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import {
    type ProtoPropertyHolderMixin,
    protoPropertyHolderMixin,
} from "./mixins/ProtoPropertyHolderMixin";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ProtoPropertyHolder extends ProtoPropertyHolderMixin {}

class ProtoPropertyHolder extends InMemoryEntity<ProtoPropertyHolderSchema> {}

protoPropertyHolderMixin(ProtoPropertyHolder.prototype);

export default ProtoPropertyHolder;
