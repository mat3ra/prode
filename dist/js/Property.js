"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_1 = require("@mat3ra/code/dist/js/entity");
const NamedEntityMixin_1 = require("@mat3ra/code/dist/js/entity/mixins/NamedEntityMixin");
class Property extends entity_1.InMemoryEntity {
    toRowValues(group, slug) {
        return [
            {
                ...this.toJSON(),
                slug,
                group,
            },
        ];
    }
    static prettifyName(name) {
        return (name.charAt(0).toUpperCase() + name.slice(1)).replace("_", " ");
    }
}
Property.isRefined = false;
Property.isConvergence = false;
Property.isAbleToReturnMultipleResults = false;
(0, NamedEntityMixin_1.namedEntityMixin)(Property.prototype);
exports.default = Property;
