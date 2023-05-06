import { boolean, z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userSchemaResponse = userSchema.omit({ password: true });

const userLoginSchema = z.object({
  password: z.string().max(120),
  email: z.string().email().max(45),
});
const usersSchemaResponse = z.array(userSchemaResponse);

const userSchemaPatch = userSchemaRequest.partial().omit({ admin: true });
export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userLoginSchema,
  usersSchemaResponse,
  userSchemaPatch,
};
