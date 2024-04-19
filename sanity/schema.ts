import { type SchemaTypeDefinition } from "sanity";
import { caseStudyType } from "./schemaTypes/caseStudyType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudyType],
};
