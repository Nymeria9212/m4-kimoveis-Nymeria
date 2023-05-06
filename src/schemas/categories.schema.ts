import { z } from "zod";

const categoriesSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
});

const categoriesSchemaRequest = categoriesSchema.omit({ id: true });

const categoriesResponseSchema = z.array(categoriesSchema);

export { categoriesSchema, categoriesSchemaRequest, categoriesResponseSchema };
