import { z } from "zod";
import { userSchema } from "../schemas/users.schema";
import { userSchemaRequest } from "../schemas/users.schema";
import { userSchemaResponse } from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;

export { TUser, TUserRequest, TUserResponse };
