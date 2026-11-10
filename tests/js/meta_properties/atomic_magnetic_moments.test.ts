import ExampleAtomicMagneticMoments from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/atomic_magnetic_moments_property.json";
import type { AtomicMagneticMomentsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import MetaPropertyHolder from "../../../src/js/holders/MetaPropertyHolder";
import AtomicMagneticMomentsMetaProperty from "../../../src/js/meta_properties/AtomicMagneticMomentsMetaProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

describe("AtomicMagneticMomentsMetaProperty", () => {
    it("should create an atomic magnetic moments property with correct constructor, propertyType, propertyName and values", () => {
        const atomicMagneticMomentsProperty = new AtomicMagneticMomentsMetaProperty(
            ExampleAtomicMagneticMoments as AtomicMagneticMomentsPropertySchema,
        );

        expect(atomicMagneticMomentsProperty).to.be.instanceOf(AtomicMagneticMomentsMetaProperty);
        expect(AtomicMagneticMomentsMetaProperty.propertyType).equal(PropertyType.non_scalar);
        expect(AtomicMagneticMomentsMetaProperty.propertyName).equal(
            PropertyName.atomic_magnetic_moments,
        );
        expect(atomicMagneticMomentsProperty.values).to.deep.equal(
            ExampleAtomicMagneticMoments.values,
        );
    });

    it("should be the property of a meta property holder with an atomic magnetic moments document", () => {
        const metaPropertyHolder = new MetaPropertyHolder({
            data: ExampleAtomicMagneticMoments as AtomicMagneticMomentsPropertySchema,
            source: {
                type: "exabyte",
                info: {
                    materialId: "material-123",
                },
            },
        });
        const property = metaPropertyHolder.property as AtomicMagneticMomentsMetaProperty;

        expect(property).to.be.instanceOf(AtomicMagneticMomentsMetaProperty);
        expect(property.values).to.deep.equal(ExampleAtomicMagneticMoments.values);
    });
});
