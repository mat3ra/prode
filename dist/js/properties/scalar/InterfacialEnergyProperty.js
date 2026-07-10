"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InterfacialEnergyPropertySchemaMixin_1 = require("../../generated/InterfacialEnergyPropertySchemaMixin");
const Property_1 = __importDefault(require("../../Property"));
const settings_1 = require("../../settings");
class InterfacialEnergyProperty extends Property_1.default {
    constructor(config) {
        super({ ...config, name: InterfacialEnergyProperty.propertyName });
    }
}
InterfacialEnergyProperty.isRefined = true;
InterfacialEnergyProperty.propertyName = settings_1.PropertyName.interfacial_energy;
InterfacialEnergyProperty.propertyType = settings_1.PropertyType.scalar;
exports.default = InterfacialEnergyProperty;
(0, InterfacialEnergyPropertySchemaMixin_1.interfacialEnergyPropertySchemaMixin)(InterfacialEnergyProperty.prototype);
