/* eslint-disable no-unused-expressions */
import type { HysteresisLoopPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import HysteresisLoopProperty from "../../../src/js/properties/non-scalar/HysteresisLoopProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("HysteresisLoopProperty", () => {
    const config: Omit<HysteresisLoopPropertySchema, "name"> = {
        field: "on",
        xAxis: {
            label: "bias",
            units: "V",
        },
        yAxis: {
            label: "amplitude",
            units: "m",
        },
        xDataArray: [1.20192, 2.40385, 3.60577, 4.80769, 6.00961, 7.21154],
        yDataSeries: [
            [2.84118e-10, 3.66615e-10, 4.41226e-10, 5.08612e-10, 5.69075e-10, 6.18613e-10] as [
                number,
                ...number[],
            ],
        ],
    };

    it("should create a hysteresis loop property with correct constructor, propertyType, propertyName, and defined properties", () => {
        const hysteresisLoopProperty = new HysteresisLoopProperty(config);

        // Test basic properties
        expect(hysteresisLoopProperty).to.be.instanceOf(HysteresisLoopProperty);
        expect(HysteresisLoopProperty.propertyType).equal(PropertyType.non_scalar);
        expect(HysteresisLoopProperty.propertyName).equal(PropertyName.hysteresis_loop);
        expect(HysteresisLoopProperty.isRefined).to.be.true;

        // Test defined properties
        expect(hysteresisLoopProperty.subtitle).to.equal("Hysteresis Loop");
        expect(hysteresisLoopProperty.yAxisTitle).to.equal("amplitude (m)");
        expect(hysteresisLoopProperty.xAxisTitle).to.equal("Bias (V)");
        expect(hysteresisLoopProperty.chartConfig).to.exist;
        expect(hysteresisLoopProperty.chartConfig).to.be.an("object");
    });
});
