/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { CurrentVoltageCurvePropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import {
    type CurrentVoltageCurvePropertySchemaMixin,
    currentVoltageCurvePropertySchemaMixin,
} from "../../generated/CurrentVoltageCurvePropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import { TwoDimensionalHighChartConfigMixin } from "../include/mixins/2d_plot";

export class CurrentVoltageCurveConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName = "voltage";

    readonly tooltipYAxisName = "current";
}

type Schema = CurrentVoltageCurvePropertySchema;

type Base = typeof Property<Schema> & Constructor<CurrentVoltageCurvePropertySchemaMixin>;

class CurrentVoltageCurveProperty extends (Property as Base) implements Schema {
    readonly subtitle: string = "Current-Voltage Curve";

    readonly yAxisTitle: string = `Current (${this.yAxis.units})`;

    readonly xAxisTitle: string = `Voltage (${this.xAxis.units})`;

    readonly chartConfig: Options = new CurrentVoltageCurveConfig(this).config;

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.current_voltage_curve;

    static readonly propertyType = PropertyType.non_scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: CurrentVoltageCurveProperty.propertyName });
    }
}

currentVoltageCurvePropertySchemaMixin(CurrentVoltageCurveProperty.prototype);

export default CurrentVoltageCurveProperty;
