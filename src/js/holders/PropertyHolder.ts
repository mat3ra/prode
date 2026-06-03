import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import { type PropertyHolderMixin, propertyHolderMixin } from "./mixins/PropertyHolderMixin";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropertyHolder extends PropertyHolderMixin {}

class PropertyHolder extends InMemoryEntity<PropertyHolderSchema> {}

propertyHolderMixin(PropertyHolder.prototype);

export default PropertyHolder;
