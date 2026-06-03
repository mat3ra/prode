import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { WorkflowPropertySchema } from "@mat3ra/esse/dist/js/types";

export type WorkflowPropertySchemaMixin = Omit<
    WorkflowPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export type WorkflowPropertyInMemoryEntity = InMemoryEntity & WorkflowPropertySchemaMixin;

export function workflowPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & WorkflowPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<WorkflowPropertySchemaMixin> & WorkflowPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: WorkflowPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get workflows() {
            return this.requiredProp("workflows");
        },
        set workflows(value: WorkflowPropertySchema["workflows"]) {
            this.setProp("workflows", value);
        },
        get compute() {
            return this.prop("compute");
        },
        set compute(value: WorkflowPropertySchema["compute"]) {
            this.setProp("compute", value);
        },
        get metadata() {
            return this.prop("metadata");
        },
        set metadata(value: WorkflowPropertySchema["metadata"]) {
            this.setProp("metadata", value);
        },
        get properties() {
            return this.requiredProp("properties");
        },
        set properties(value: WorkflowPropertySchema["properties"]) {
            this.setProp("properties", value);
        },
        get isUsingDataset() {
            return this.prop("isUsingDataset");
        },
        set isUsingDataset(value: WorkflowPropertySchema["isUsingDataset"]) {
            this.setProp("isUsingDataset", value);
        },
        get isMultiMaterial() {
            return this.prop("isMultiMaterial");
        },
        set isMultiMaterial(value: WorkflowPropertySchema["isMultiMaterial"]) {
            this.setProp("isMultiMaterial", value);
        },
        get subworkflows() {
            return this.requiredProp("subworkflows");
        },
        set subworkflows(value: WorkflowPropertySchema["subworkflows"]) {
            this.setProp("subworkflows", value);
        },
        get units() {
            return this.requiredProp("units");
        },
        set units(value: WorkflowPropertySchema["units"]) {
            this.setProp("units", value);
        },
        get application() {
            return this.prop("application");
        },
        set application(value: WorkflowPropertySchema["application"]) {
            this.setProp("application", value);
        },
        get tags() {
            return this.prop("tags");
        },
        set tags(value: WorkflowPropertySchema["tags"]) {
            this.setProp("tags", value);
        },
        get description() {
            return this.prop("description");
        },
        set description(value: WorkflowPropertySchema["description"]) {
            this.setProp("description", value);
        },
        get descriptionObject() {
            return this.prop("descriptionObject");
        },
        set descriptionObject(value: WorkflowPropertySchema["descriptionObject"]) {
            this.setProp("descriptionObject", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
