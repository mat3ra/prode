import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";

export type JupyterNotebookEndpointPropertySchemaMixin = Omit<
    JupyterNotebookEndpointPropertySchema,
    "_id" | "slug" | "systemName" | "schemaVersion"
>;

export function jupyterNotebookEndpointPropertySchemaMixin<T extends InMemoryEntity>(
    item: InMemoryEntity,
): asserts item is T & JupyterNotebookEndpointPropertySchemaMixin {
    // @ts-expect-error
    const properties: InMemoryEntity<JupyterNotebookEndpointPropertySchemaMixin> &
        JupyterNotebookEndpointPropertySchemaMixin = {
        get name() {
            return this.requiredProp("name");
        },
        set name(value: JupyterNotebookEndpointPropertySchema["name"]) {
            this.setProp("name", value);
        },
        get host() {
            return this.requiredProp("host");
        },
        set host(value: JupyterNotebookEndpointPropertySchema["host"]) {
            this.setProp("host", value);
        },
        get port() {
            return this.requiredProp("port");
        },
        set port(value: JupyterNotebookEndpointPropertySchema["port"]) {
            this.setProp("port", value);
        },
        get token() {
            return this.requiredProp("token");
        },
        set token(value: JupyterNotebookEndpointPropertySchema["token"]) {
            this.setProp("token", value);
        },
    };

    Object.defineProperties(item, Object.getOwnPropertyDescriptors(properties));
}
