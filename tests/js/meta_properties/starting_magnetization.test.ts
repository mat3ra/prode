import type { StartingMagnetizationPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import StartingMagnetizationProperty from "../../../src/js/meta_properties/StartingMagnetizationProperty";
import { PropertyName } from "../../../src/js/settings";

describe("StartingMagnetizationProperty", () => {
    it("should create a starting magnetization property with correct constructor and propertyName", () => {
        const config: Omit<StartingMagnetizationPropertySchema, "name"> = {
            values: [
                {
                    id: 0,
                    value: -0.5,
                },
            ],
        };

        const startingMagnetizationProperty = new StartingMagnetizationProperty(config);

        expect(startingMagnetizationProperty).to.be.instanceOf(StartingMagnetizationProperty);
        expect(StartingMagnetizationProperty.propertyName).equal(
            PropertyName.starting_magnetization,
        );
    });
});
