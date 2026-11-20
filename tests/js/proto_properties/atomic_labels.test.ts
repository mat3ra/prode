import AtomicLabels from "@mat3ra/esse/dist/js/example/properties_directory/structural/basis/atomic_labels.json";
import type { ProtoPropertyHolderSchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import ProtoPropertyHolder from "../../../src/js/holders/ProtoPropertyHolder";
import AtomicLabelsProperty from "../../../src/js/proto_properties/AtomicLabelsProperty";

describe("AtomicLabelsProperty", () => {
    it("should create atomic_labels from a proto property holder", () => {
        const { property } = new ProtoPropertyHolder({
            data: AtomicLabels as ProtoPropertyHolderSchema["data"],
            source: { type: "exabyte", info: { materialId: "proto-123" } },
        });
        expect(property).to.be.instanceOf(AtomicLabelsProperty);
        expect(property.toJSON()).to.deep.equal(AtomicLabels);
    });
});
