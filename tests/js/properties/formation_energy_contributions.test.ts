import type { FormationEnergyContributionsPropertySchema } from "@mat3ra/esse/dist/js/types";
import { expect } from "chai";

import FormationEnergyContributionsProperty from "../../../src/js/properties/array-of-objects/FormationEnergyContributionsProperty";
import { PropertyName, PropertyType } from "../../../src/js/settings";

const FORMATION_ENERGY_CONTRIBUTIONS_VALUES: FormationEnergyContributionsPropertySchema["values"] =
    [
        {
            formula: "SiC",
            n_atoms: 4,
            is_elemental: false,
            total_energy: -520.003969643439,
            total_energy_per_atom: -130.0,
            precision_value: 8192,
            precision_metric: "KPPRA",
        },
        {
            formula: "Si",
            n_atoms: 2,
            is_elemental: true,
            total_energy: -261.003969643439,
            total_energy_per_atom: -130.501,
            precision_value: 8192,
            precision_metric: "KPPRA",
        },
    ];

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
