import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
type Schema = PropertyHolderSchema;
interface PropertyHolder extends PropertyHolderMixin {
}
declare class PropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {
}
export default PropertyHolder;
