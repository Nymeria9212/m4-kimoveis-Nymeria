import { z } from "zod";
import {
  categoriesResponseSchema,
  categoriesSchema,
  categoriesSchemaRequest,
} from "../schemas/categories.schema";

type TCategorie = z.infer<typeof categoriesSchema>;
type TCategorieRequest = z.infer<typeof categoriesSchemaRequest>;
type TCategorieResponse = z.infer<typeof categoriesResponseSchema>;

export { TCategorie, TCategorieRequest, TCategorieResponse };
