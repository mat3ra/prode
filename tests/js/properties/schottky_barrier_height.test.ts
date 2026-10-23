/* eslint-disable no-unused-expressions */
import { expect } from "chai";

import SchottkyBarrierHeightNTypeProperty from "../../../src/js/properties/scalar/SchottkyBarrierHeightNTypeProperty";
import SchottkyBarrierHeightPTypeProperty from "../../../src/js/properties/scalar/SchottkyBarrierHeightPTypeProperty";
import PropertyFactory from "../../../src/js/PropertyFactory";
import { PropertyName, PropertyType } from "../../../src/js/settings";

const P_TYPE_VALUE = 1.046;
const N_TYPE_VALUE = 0.596;
const UNITS = "eV";

const CASES = [
    {
        PropertyClass: SchottkyBarrierHeightPTypeProperty,
        name: PropertyName.schottky_barrier_height_p,
        value: P_TYPE_VALUE,
    },
    {
        PropertyClass: SchottkyBarrierHeightNTypeProperty,
        name: PropertyName.schottky_barrier_height_n,
        value: N_TYPE_VALUE,
    },
];

describe("SchottkyBarrierHeightProperty", () => {
    CASES.forEach(({ PropertyClass, name, value }) => {
        it(`should create ${name} with correct constructor, propertyType, propertyName, and isRefined`, () => {
            const property = new PropertyClass({ value, units: UNITS });

            expect(property).to.be.instanceOf(PropertyClass);
            expect(PropertyClass.propertyType).equal(PropertyType.scalar);
            expect(PropertyClass.propertyName).equal(name);
            expect(PropertyClass.isRefined).to.be.true;
            expect(property.value).to.equal(value);
        });

        it(`should be created by PropertyFactory from ${name}`, () => {
            const property = PropertyFactory.createProperty({ name, value, units: UNITS } as never);

            expect(property).to.be.instanceOf(PropertyClass);
        });
    });
});
