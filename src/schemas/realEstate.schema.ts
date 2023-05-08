import { boolean, z } from "zod";
import { AddressSchema, AddressSchemaRequest } from "./address.schema";
import { categoriesResponseSchema } from "./categories.schema";

const realStateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  address: AddressSchema,
  category: categoriesResponseSchema,
});

const realEstateSchemaRequest = z.object({
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  address: AddressSchemaRequest,
  categoryId: z.number().int(),
});

const listRealEstatesSchema = z.array(realEstateSchemaRequest);
export { realStateSchema, realEstateSchemaRequest, listRealEstatesSchema };
