/* eslint-disable no-unused-expressions */
import AtomicLabels from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/atomic_labels_property.json";
import AtomicMagneticMoments from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/atomic_magnetic_moments_property.json";
import type { PropertyHolderSchema, ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import { PropertyName } from "../../src/js";
import MetaPropertyHolder from "../../src/js/holders/MetaPropertyHolder";
import PropertyHolder from "../../src/js/holders/PropertyHolder";
import ProtoPropertyHolder from "../../src/js/holders/ProtoPropertyHolder";
import AtomicLabelsProperty from "../../src/js/proto_properties/AtomicLabelsProperty";
import AtomicMagneticMomentsProperty from "../../src/js/proto_properties/AtomicMagneticMomentsProperty";

describe("Holders", () => {
    it("should test PropertyHolderMixin functions", () => {
        const propertyHolder = new PropertyHolder({
            data: {
                name: PropertyName.total_energy,
                value: 100.5,
                units: "eV",
            },
            source: {
                type: "exabyte",
                info: {
                    jobId: "test-123",
                    unitId: "test-456",
                },
            },
            exabyteId: ["test-789", "test-101"],
            repetition: 1,
        });

        expect(propertyHolder).to.be.instanceOf(PropertyHolder);
        expect(propertyHolder.sourceInfo).to.be.an("object");
        expect(propertyHolder.property).to.exist;

        // Test flattenProperties method
        const flattened = propertyHolder.flattenProperties();
        expect(flattened).to.be.an("array");

        // Test toRowValues method
        const rowValues = propertyHolder.toRowValues();
        expect(rowValues).to.be.an("array");
    });

    it("should test MetaPropertyHolder with MetaPropertyHolderMixin functions", () => {
        const metaPropertyHolder = new MetaPropertyHolder({
            data: {
                name: PropertyName.pseudopotential,
                element: "Si",
                hash: "test-hash",
                path: "/path/to/pseudo",
                apps: ["espresso"],
                exchangeCorrelation: {
                    functional: "pbe",
                    approximation: "gga",
                },
                source: "user",
                type: "nc",
            },
            source: {
                type: "exabyte",
                info: {
                    materialId: "meta-123",
                },
            },
        });

        expect(metaPropertyHolder).to.be.instanceOf(MetaPropertyHolder);
        expect(metaPropertyHolder.property).to.exist;
    });

    it("should test ProtoPropertyHolder with ProtoPropertyHolderMixin functions", () => {
        const protoPropertyHolder = new ProtoPropertyHolder({
            data: {
                name: PropertyName.boundary_conditions,
                type: "pbc",
                offset: 0.0,
            },
            source: {
                type: "exabyte",
                info: {
                    materialId: "proto-123",
                },
            },
        });

        expect(protoPropertyHolder).to.be.instanceOf(ProtoPropertyHolder);
        expect(protoPropertyHolder.property).to.exist;
    });

    [
        { data: AtomicLabels, PropertyClass: AtomicLabelsProperty },
        { data: AtomicMagneticMoments, PropertyClass: AtomicMagneticMomentsProperty },
    ].forEach(({ data, PropertyClass }) => {
        it(`should create ${data.name} from a proto property holder`, () => {
            const { property } = new ProtoPropertyHolder({
                data: data as ProtoPropertyHolderSchema["data"],
                source: { type: "exabyte", info: { materialId: "proto-123" } },
            });
            expect(property).to.be.instanceOf(PropertyClass);
            expect(property.toJSON()).to.deep.equal(data);
        });
    });

    describe("generic schema wrapper", () => {
        type WiderPropertyHolderSchema = PropertyHolderSchema & { webappOnly?: string };

        class WiderPropertyHolder extends PropertyHolder<WiderPropertyHolderSchema> {}

        it("allows subclasses to widen _json typing and storage", () => {
            const propertyHolder = new WiderPropertyHolder({
                data: {
                    name: PropertyName.total_energy,
                    value: 100.5,
                    units: "eV",
                },
                source: {
                    type: "exabyte",
                    info: {
                        jobId: "test-123",
                        unitId: "test-456",
                    },
                },
                exabyteId: ["test-789", "test-101"],
                repetition: 1,
            });

            propertyHolder._json.webappOnly = "webapp-value";
            expect(propertyHolder._json.webappOnly).to.equal("webapp-value");

            expect(propertyHolder.toJSON().data.name).to.equal(PropertyName.total_energy);
            expect(propertyHolder._json.webappOnly).to.equal("webapp-value");

            propertyHolder._json.webappOnly = "updated";
            expect(propertyHolder._json.webappOnly).to.equal("updated");
        });
    });
});
