/* eslint-disable no-unused-expressions */
import type { LoopWidthPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import LoopWidthProperty from "../../../src/js/properties/scalar/LoopWidthProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("LoopWidthProperty", () => {
    it("should create a loop width property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<LoopWidthPropertySchema, "name"> = {
            value: 11.316211821851713,
            units: "V",
            field: "off",
        };

        const loopWidthProperty = new LoopWidthProperty(config);

        expect(loopWidthProperty).to.be.instanceOf(LoopWidthProperty);
        expect(LoopWidthProperty.propertyType).equal(PropertyType.scalar);
        expect(LoopWidthProperty.propertyName).equal(PropertyName.loop_width);
        expect(LoopWidthProperty.isRefined).to.be.true;
    });
});
