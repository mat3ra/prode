import ExampleStartingMagnetization from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/starting_magnetization_property.json";
import type { StartingMagnetizationPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import MetaPropertyHolder from "../../../src/js/holders/MetaPropertyHolder";
import StartingMagnetizationMetaProperty from "../../../src/js/meta_properties/StartingMagnetizationMetaProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("StartingMagnetizationMetaProperty", () => {
    it("should create a starting magnetization property with correct constructor, propertyType, propertyName and values", () => {
        const startingMagnetizationProperty = new StartingMagnetizationMetaProperty(
            ExampleStartingMagnetization,
        );

        expect(startingMagnetizationProperty).to.be.instanceOf(StartingMagnetizationMetaProperty);
        expect(StartingMagnetizationMetaProperty.propertyType).equal(PropertyType.non_scalar);
        expect(StartingMagnetizationMetaProperty.propertyName).equal(
            PropertyName.starting_magnetization,
        );
        expect(startingMagnetizationProperty.values).to.deep.equal(
            ExampleStartingMagnetization.values,
        );
    });

    it("should be the property of a meta property holder with a starting magnetization document", () => {
        const metaPropertyHolder = new MetaPropertyHolder({
            data: ExampleStartingMagnetization as StartingMagnetizationPropertySchema,
            source: {
                type: "exabyte",
                info: {
                    materialId: "material-123",
                },
            },
        });
        const property = metaPropertyHolder.property as StartingMagnetizationMetaProperty;

        expect(property).to.be.instanceOf(StartingMagnetizationMetaProperty);
        expect(property.values).to.deep.equal(ExampleStartingMagnetization.values);
    });
});
