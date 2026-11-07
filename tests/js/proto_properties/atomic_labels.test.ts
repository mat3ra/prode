import ExampleAtomicLabels from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/atomic_labels_property.json";
import { expect } from "chai";

import AtomicLabelsProperty from "../../../src/js/proto_properties/AtomicLabelsProperty";
import { PropertyName } from "../../../src/js/settings";

describe("AtomicLabelsProperty", () => {
    it("should create an atomic labels property with correct constructor, propertyName and values", () => {
        const atomicLabelsProperty = new AtomicLabelsProperty(ExampleAtomicLabels);

        expect(atomicLabelsProperty).to.be.instanceOf(AtomicLabelsProperty);
        expect(AtomicLabelsProperty.propertyName).equal(PropertyName.atomic_labels);
        expect(atomicLabelsProperty.values).to.deep.equal(ExampleAtomicLabels.values);
    });
});
