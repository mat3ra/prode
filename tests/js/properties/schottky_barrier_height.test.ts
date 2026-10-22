import type { SchottkyBarrierHeightPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import SchottkyBarrierHeightProperty from "../../../src/js/properties/object/SchottkyBarrierHeightProperty";
import PropertyFactory from "../../../src/js/PropertyFactory";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("SchottkyBarrierHeightProperty", () => {
    it("should create a Schottky barrier height property with correct constructor, propertyType, propertyName, and p/n-type values", () => {
        const config: Omit<SchottkyBarrierHeightPropertySchema, "name"> = {
            units: "eV",
            pType: 1.046,
            nType: 0.596,
        };

        const schottkyBarrierHeightProperty = new SchottkyBarrierHeightProperty(config);

        expect(schottkyBarrierHeightProperty).to.be.instanceOf(SchottkyBarrierHeightProperty);
        expect(SchottkyBarrierHeightProperty.propertyType).equal(PropertyType.object);
        expect(SchottkyBarrierHeightProperty.propertyName).equal(
            PropertyName.schottky_barrier_height,
        );
        expect(schottkyBarrierHeightProperty.pType).to.equal(1.046);
        expect(schottkyBarrierHeightProperty.nType).to.equal(0.596);
    });

    it("should be created by PropertyFactory from its name", () => {
        const property = PropertyFactory.createProperty({
            name: PropertyName.schottky_barrier_height,
            units: "eV",
            pType: 1.046,
            nType: 0.596,
        } as SchottkyBarrierHeightPropertySchema);

        expect(property).to.be.instanceOf(SchottkyBarrierHeightProperty);
    });
});
