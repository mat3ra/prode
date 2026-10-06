/* eslint-disable no-unused-expressions */
import ExampleCurrentVoltageCurve from "@mat3ra/esse/dist/js/example/properties_directory/non_scalar/current_voltage_curve.json";
import type { CurrentVoltageCurvePropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import CurrentVoltageCurveProperty from "../../../src/js/properties/non-scalar/CurrentVoltageCurveProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("CurrentVoltageCurveProperty", () => {
    const config: Omit<CurrentVoltageCurvePropertySchema, "name"> =
        ExampleCurrentVoltageCurve as unknown as Omit<CurrentVoltageCurvePropertySchema, "name">;

    it("should create a current-voltage curve property with correct constructor, propertyType, propertyName, and defined properties", () => {
        const property = new CurrentVoltageCurveProperty(config);

        expect(property).to.be.instanceOf(CurrentVoltageCurveProperty);
        expect(CurrentVoltageCurveProperty.propertyType).equal(PropertyType.non_scalar);
        expect(CurrentVoltageCurveProperty.propertyName).equal(PropertyName.current_voltage_curve);
        expect(CurrentVoltageCurveProperty.isRefined).to.be.true;

        expect(property.subtitle).to.equal("Current-Voltage Curve");
        expect(property.yAxisTitle).to.equal(`Current (${config.yAxis.units})`);
        expect(property.xAxisTitle).to.equal(`Voltage (${config.xAxis.units})`);
        expect(property.chartConfig).to.be.an("object");
    });
});
