import type { Constructor } from "@mat3ra/code/dist/js/utils/types";
import type { FilmThicknessSchema } from "@mat3ra/esse/dist/js/types";

import {
    FilmThicknessPropertySchemaMixin,
    filmThicknessPropertySchemaMixin,
} from "../../generated/FilmThicknessPropertySchemaMixin";
import Property from "../../Property";
import { PropertyName, PropertyType } from "../../settings";

type Schema = FilmThicknessSchema;

type Base = typeof Property<Schema> & Constructor<FilmThicknessPropertySchemaMixin>;

export default class FilmThicknessProperty extends (Property as Base) implements Schema {
    static readonly isRefined = true;

    static readonly propertyName = PropertyName.film_thickness;

    static readonly propertyType = PropertyType.scalar;

    constructor(config: Omit<Schema, "name">) {
        super({ ...config, name: FilmThicknessProperty.propertyName });
    }
}

filmThicknessPropertySchemaMixin(FilmThicknessProperty.prototype);
