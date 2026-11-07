import type { AtomicLabelsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import AtomicLabelsProperty from "../../../src/js/proto_properties/AtomicLabelsProperty";
import { PropertyName } from "../../../src/js/settings";

describe("AtomicLabelsProperty", () => {
    it("should create an atomic labels property with correct constructor and propertyName", () => {
        const config: Omit<AtomicLabelsPropertySchema, "name"> = {
            values: [
                {
                    id: 0,
                    value: 1,
                },
            ],
        };

        const atomicLabelsProperty = new AtomicLabelsProperty(config);

        expect(atomicLabelsProperty).to.be.instanceOf(AtomicLabelsProperty);
        expect(AtomicLabelsProperty.propertyName).equal(PropertyName.atomic_labels);
    });
});
