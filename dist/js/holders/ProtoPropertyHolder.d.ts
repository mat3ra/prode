import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type ProtoPropertyHolderMixin } from "./mixins/ProtoPropertyHolderMixin";
type Schema = ProtoPropertyHolderSchema;
interface ProtoPropertyHolder extends ProtoPropertyHolderMixin {
}
declare class ProtoPropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {
}
export default ProtoPropertyHolder;
