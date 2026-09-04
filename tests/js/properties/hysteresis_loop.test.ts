/* eslint-disable no-unused-expressions */
import type { HysteresisLoopPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import HysteresisLoopProperty from "../../../src/js/properties/non-scalar/HysteresisLoopProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("HysteresisLoopProperty", () => {
    const config: Omit<HysteresisLoopPropertySchema, "name"> = {
        legend: ["on", "off"],
        xAxis: {
            label: "bias",
            units: "V",
        },
        yAxis: {
            label: "response",
            units: "m",
        },
        xDataArray: [1.20192, 2.40385, 3.60577],
        yDataSeries: [
            [2.7067e-10, 3.43727e-10, 4.17108e-10] as [number, ...number[]],
            [-1.64063e-10, -1.60103e-10, -1.51936e-10] as [number, ...number[]],
        ],
        parameters: {
            on: {
                imprint: {
                    value: -0.0945645,
                    uncertainty: 0.201563,
                    count: 8,
                },
                coerciveVoltage: {
                    rising: {
                        value: -1.69559,
                        uncertainty: 0.563452,
                        count: 8,
                    },
                    falling: {
                        value: 1.50646,
                        uncertainty: 0.390574,
                        count: 8,
                    },
                },
                loopWidth: {
                    value: 3.20206,
                    uncertainty: 0.881783,
                    count: 8,
                },
                loopHeight: {
                    value: 1.87428e-10,
                    uncertainty: 7.31456e-11,
                    count: 8,
                },
                remanentResponse: {
                    rising: {
                        value: 2.52078e-10,
                        uncertainty: 3.3268e-11,
                        count: 8,
                    },
                    falling: {
                        value: 6.465e-11,
                        uncertainty: 4.74947e-11,
                        count: 8,
                    },
                },
            },
            off: {
                imprint: {
                    value: 0.264414,
                    uncertainty: 0.199464,
                    count: 8,
                },
                coerciveVoltage: {
                    rising: {
                        value: 5.54018,
                        uncertainty: 0.390596,
                        count: 8,
                    },
                    falling: {
                        value: -5.01135,
                        uncertainty: 0.462897,
                        count: 8,
                    },
                },
                loopWidth: {
                    value: 10.5515,
                    uncertainty: 0.757981,
                    count: 8,
                },
                loopHeight: {
                    value: 1.84282e-10,
                    uncertainty: 7.23293e-11,
                    count: 8,
                },
                remanentResponse: {
                    rising: {
                        value: -2.48029e-10,
                        uncertainty: 3.33361e-11,
                        count: 8,
                    },
                    falling: {
                        value: -6.37461e-11,
                        uncertainty: 4.74305e-11,
                        count: 8,
                    },
                },
            },
        },
        loopCount: {
            on: 8,
            off: 8,
        },
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
        expect(hysteresisLoopProperty.yAxisTitle).to.equal("Response (m)");
        expect(hysteresisLoopProperty.xAxisTitle).to.equal("Bias (V)");
        expect(hysteresisLoopProperty.chartConfig).to.exist;
        expect(hysteresisLoopProperty.chartConfig).to.be.an("object");
        expect(
            hysteresisLoopProperty.chartConfig.series?.map((series) => series.name),
        ).to.deep.equal(["on", "off"]);

        // Test loop parameters
        expect(hysteresisLoopProperty.parameters.off.imprint.count).to.equal(8);
    });

    it("shows the legend so the on and off series are distinguishable", () => {
        const property = new HysteresisLoopProperty(config);
        expect(
            (property.chartConfig.legend as { enabled?: boolean } | undefined)?.enabled,
        ).to.not.equal(false);
        expect(property.chartConfig.legend).to.have.property("verticalAlign", "bottom");
    });
});
