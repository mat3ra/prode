import type { InMemoryEntity } from "@mat3ra/code/dist/js/entity";
import type { BaseInMemoryEntitySchema, JupyterNotebookEndpointPropertySchema } from "@mat3ra/esse/dist/js/types";
export type JupyterNotebookEndpointPropertySchemaMixin = Omit<JupyterNotebookEndpointPropertySchema, "_id" | "slug" | "systemName" | "schemaVersion">;
export type JupyterNotebookEndpointPropertyInMemoryEntity = InMemoryEntity<BaseInMemoryEntitySchema & JupyterNotebookEndpointPropertySchemaMixin>;
export declare function jupyterNotebookEndpointPropertySchemaMixin<T extends InMemoryEntity>(item: InMemoryEntity): asserts item is T & JupyterNotebookEndpointPropertySchemaMixin;
