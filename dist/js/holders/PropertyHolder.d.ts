import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { type PropertyHolderMixin } from "./mixins/PropertyHolderMixin";
interface PropertyHolder extends PropertyHolderMixin {
}
declare class PropertyHolder extends InMemoryEntity<PropertyHolderSchema> {
}
export default PropertyHolder;
