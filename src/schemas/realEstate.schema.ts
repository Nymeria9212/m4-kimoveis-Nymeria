import { boolean, z } from "zod";

const realStateSchema = z.object({
  sold: z.optional(boolean()).default(false),
  value: z.number().multipleOf(0.01),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addressId: z.number().int(),
  categoryId: z.number().int(),
});

const realEstateSchemaRequest = realStateSchema.omit({
  createdAt: true,
  updatedAt: true,
});

export { realStateSchema, realEstateSchemaRequest };
