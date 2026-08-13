import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { MetaPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type MetaPropertyHolderMixin } from "./mixins/MetaPropertyHolderMixin";
type Schema = MetaPropertyHolderSchema;
interface MetaPropertyHolder extends MetaPropertyHolderMixin {
}
declare class MetaPropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {
}
export default MetaPropertyHolder;
