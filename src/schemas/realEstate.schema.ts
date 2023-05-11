import { boolean, z } from "zod";
import { AddressSchema, AddressSchemaRequest } from "./address.schema";
import { categoriesSchema } from "./categories.schema";

const realStateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: AddressSchema,
  category: categoriesSchema,
});
const realEstateSchemaRequest = z.object({
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  address: AddressSchemaRequest,
  categoryId: z.number().int(),
});

const listRealEstatesSchema = z.array(realStateSchema);
export { realStateSchema, realEstateSchemaRequest, listRealEstatesSchema };
