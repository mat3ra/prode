"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormationEnergyContributionsPropertySchemaMixin_1 = require("../../generated/FormationEnergyContributionsPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
const PropertyBase = Property_1.default;
class FormationEnergyContributionsProperty extends PropertyBase {
    constructor(config) {
        super({ ...config, name: FormationEnergyContributionsProperty.propertyName });
    }
}
FormationEnergyContributionsProperty.propertyType = settings_1.PropertyType.array_of_objects;
FormationEnergyContributionsProperty.propertyName = settings_1.PropertyName.formation_energy_contributions;
exports.default = FormationEnergyContributionsProperty;
(0, FormationEnergyContributionsPropertySchemaMixin_1.formationEnergyContributionsPropertySchemaMixin)(FormationEnergyContributionsProperty.prototype);
