import { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { PropertyHolderSchema } from "@mat3ra/esse/dist/js/types";

import { type PropertyHolderMixin, propertyHolderMixin } from "./mixins/PropertyHolderMixin";

type Schema = PropertyHolderSchema;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropertyHolder extends PropertyHolderMixin {}

class PropertyHolder<S extends Schema = Schema> extends InMemoryEntity<S> implements Schema {}

propertyHolderMixin(PropertyHolder.prototype);

export default PropertyHolder;
