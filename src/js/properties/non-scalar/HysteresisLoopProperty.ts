import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { HysteresisLoopPropertySchema } from "@mat3ra/esse/dist/js/types";
import type { Options } from "highcharts";

import {
    HysteresisLoopPropertySchemaMixin,
    hysteresisLoopPropertySchemaMixin,
} from "../../generated/HysteresisLoopPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";
import {
    type TwoDimensionalHighChartConfigMixinParams,
    TwoDimensionalHighChartConfigMixin,
} from "../include/mixins/2d_plot";

type Schema = HysteresisLoopPropertySchema;

export class HysteresisLoopConfig extends TwoDimensionalHighChartConfigMixin {
    readonly tooltipXAxisName: string = "bias";

    readonly tooltipYAxisName: string;

    readonly legends: Schema["legend"];

    constructor(
        property: TwoDimensionalHighChartConfigMixinParams & Pick<Schema, "yAxis" | "legend">,
    ) {
        super(property);
        this.tooltipYAxisName = property.yAxis.label;
        this.legends = property.legend;
    }

    get series() {
        return super.series.map((series, index) => ({
            ...series,
            name: this.legends[index],
        }));
    }
}

type Base = typeof Property<Schema> & Constructor<HysteresisLoopPropertySchemaMixin>;

class HysteresisLoopProperty extends (Property as Base) implements Schema {
    readonly subtitle: string = "Hysteresis Loop";

    readonly yAxisTitle: string = `${Property.prettifyName(this.yAxis.label)} (${
        this.yAxis.units
    })`;

    readonly xAxisTitle: string = `Bias (${this.xAxis.units})`;

    readonly chartConfig: Options = new HysteresisLoopConfig(this).config;

    static readonly isRefined = true;

    static readonly propertyName = PropertyName.hysteresis_loop;

    static readonly propertyType = PropertyType.non_scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: HysteresisLoopProperty.propertyName });
    }
}

hysteresisLoopPropertySchemaMixin(HysteresisLoopProperty.prototype);

export default HysteresisLoopProperty;
