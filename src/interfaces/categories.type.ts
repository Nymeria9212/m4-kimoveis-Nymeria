import { z } from "zod";
import {
  categoriesSchema,
  categoriesSchemaRequest,
} from "../schemas/categories.schema";

type TCategorie = z.infer<typeof categoriesSchema>;
type TCategorieRequest = z.infer<typeof categoriesSchemaRequest>;

export { TCategorie, TCategorieRequest };
