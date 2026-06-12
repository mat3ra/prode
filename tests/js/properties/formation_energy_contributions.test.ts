import formationEnergyContributionsExample from "@mat3ra/esse/dist/js/example/properties_directory/non_scalar/formation_energy_contributions.json";
import type { FormationEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import FormationEnergyContributionsProperty from "../../../src/js/properties/array-of-objects/FormationEnergyContributionsProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

const FORMATION_ENERGY_CONTRIBUTIONS_EXAMPLE =
    formationEnergyContributionsExample as FormationEnergyContributionsPropertySchema;
const FORMATION_ENERGY_CONTRIBUTIONS_VALUES = FORMATION_ENERGY_CONTRIBUTIONS_EXAMPLE.values;

describe("FormationEnergyContributionsProperty", () => {
    it("should create a formation energy contributions property with correct constructor, propertyType, propertyName, and values", () => {
        const config: Omit<FormationEnergyContributionsPropertySchema, "name"> = {
            values: FORMATION_ENERGY_CONTRIBUTIONS_VALUES,
        };

        const formationEnergyContributionsProperty = new FormationEnergyContributionsProperty(
            config,
        );

        expect(formationEnergyContributionsProperty).to.be.instanceOf(
            FormationEnergyContributionsProperty,
        );
        expect(FormationEnergyContributionsProperty.propertyType).equal(
            PropertyType.array_of_objects,
        );
        expect(FormationEnergyContributionsProperty.propertyName).equal(
            PropertyName.formation_energy_contributions,
        );
        expect(formationEnergyContributionsProperty.values).to.deep.equal(
            FORMATION_ENERGY_CONTRIBUTIONS_VALUES,
        );
    });
});
