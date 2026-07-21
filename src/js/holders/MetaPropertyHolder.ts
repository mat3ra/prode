import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import {
    type MetaPropertyHolderMixin,
    metaPropertyHolderMixin,
} from "./mixins/MetaPropertyHolderMixin";

type Schema = MetaPropertyHolderSchema;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MetaPropertyHolder extends MetaPropertyHolderMixin {}

class MetaPropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {}

metaPropertyHolderMixin(MetaPropertyHolder.prototype);

export default MetaPropertyHolder;
