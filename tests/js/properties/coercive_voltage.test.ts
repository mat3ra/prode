/* eslint-disable no-unused-expressions */
import type { CoerciveVoltagePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import CoerciveVoltageProperty from "../../../src/js/properties/scalar/CoerciveVoltageProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("CoerciveVoltageProperty", () => {
    it("should create a coercive voltage property with correct constructor, propertyType, propertyName, and isRefined", () => {
        const config: Omit<CoerciveVoltagePropertySchema, "name"> = {
            value: 5.932855844954121,
            units: "V",
            field: "off",
            branch: "rising",
        };

        const coerciveVoltageProperty = new CoerciveVoltageProperty(config);

        expect(coerciveVoltageProperty).to.be.instanceOf(CoerciveVoltageProperty);
        expect(CoerciveVoltageProperty.propertyType).equal(PropertyType.scalar);
        expect(CoerciveVoltageProperty.propertyName).equal(PropertyName.coercive_voltage);
        expect(CoerciveVoltageProperty.isRefined).to.be.true;
    });
});
