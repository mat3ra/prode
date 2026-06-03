import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import {
    type MetaPropertyHolderMixin,
    metaPropertyHolderMixin,
} from "./mixins/MetaPropertyHolderMixin";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MetaPropertyHolder extends MetaPropertyHolderMixin {}

class MetaPropertyHolder extends InMemoryEntity<MetaPropertyHolderSchema> {}

metaPropertyHolderMixin(MetaPropertyHolder.prototype);

export default MetaPropertyHolder;
