import { z } from "zod";

const realStateSchema = z.object({
  sold: z.boolean(),
  value: z.number().multipleOf(0.01),
  size: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  addressId: z.number().int(),
  categoryId: z.number().int(),
});

export { realStateSchema };
