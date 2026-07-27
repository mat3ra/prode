"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefectFormationEnergyPropertySchemaMixin_1 = require("../../generated/DefectFormationEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class DefectFormationEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: DefectFormationEnergyProperty.propertyName });
    }
}
DefectFormationEnergyProperty.isRefined = true;
DefectFormationEnergyProperty.propertyName = settings_1.PropertyName.defect_formation_energy;
DefectFormationEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = DefectFormationEnergyProperty;
(0, DefectFormationEnergyPropertySchemaMixin_1.defectFormationEnergyPropertySchemaMixin)(DefectFormationEnergyProperty.prototype);
