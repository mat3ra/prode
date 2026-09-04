/* eslint-disable no-unused-expressions */
import type { RemanentResponsePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import RemanentResponseProperty from "../../../src/js/properties/scalar/RemanentResponseProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("RemanentResponseProperty", () => {
    it("should create a remanent response property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<RemanentResponsePropertySchema, "name"> = {
            value: -2.9077058426135867e-10,
            units: "m",
            field: "off",
            branch: "rising",
        };

        const remanentResponseProperty = new RemanentResponseProperty(config);

        expect(remanentResponseProperty).to.be.instanceOf(RemanentResponseProperty);
        expect(RemanentResponseProperty.propertyType).equal(PropertyType.scalar);
        expect(RemanentResponseProperty.propertyName).equal(PropertyName.remanent_response);
        expect(RemanentResponseProperty.isRefined).to.be.true;
    });
});
