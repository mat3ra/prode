import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type ProtoPropertyHolderMixin } from "./mixins/ProtoPropertyHolderMixin";
interface ProtoPropertyHolder extends ProtoPropertyHolderMixin {
}
declare class ProtoPropertyHolder extends InMemoryEntity<ProtoPropertyHolderSchema> {
}
export default ProtoPropertyHolder;
