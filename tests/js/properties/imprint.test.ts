import type { ImprintPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import ImprintProperty from "../../../src/js/properties/scalar/ImprintProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("ImprintProperty", () => {
    it("should create an imprint property with correct constructor, propertyType, and propertyName", () => {
        const config: Omit<ImprintPropertySchema, "name"> = {
            value: 0.2747499340282644,
            units: "V",
            field: "off",
        };

        const imprintProperty = new ImprintProperty(config);

        expect(imprintProperty).to.be.instanceOf(ImprintProperty);
        expect(ImprintProperty.propertyType).equal(PropertyType.scalar);
        expect(ImprintProperty.propertyName).equal(PropertyName.imprint);
    });
});
