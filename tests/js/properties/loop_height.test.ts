/* eslint-disable no-unused-expressions */
import type { LoopHeightPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import LoopHeightProperty from "../../../src/js/properties/scalar/LoopHeightProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("LoopHeightProperty", () => {
    it("should create a loop height property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<LoopHeightPropertySchema, "name"> = {
            value: 2.162147630840006e-10,
            units: "m",
            field: "off",
        };

        const loopHeightProperty = new LoopHeightProperty(config);

        expect(loopHeightProperty).to.be.instanceOf(LoopHeightProperty);
        expect(LoopHeightProperty.propertyType).equal(PropertyType.scalar);
        expect(LoopHeightProperty.propertyName).equal(PropertyName.loop_height);
        expect(LoopHeightProperty.isRefined).to.be.true;
    });
});
