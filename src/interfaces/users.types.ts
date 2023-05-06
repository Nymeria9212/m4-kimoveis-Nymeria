import { z } from "zod";
import {
  userLoginSchema,
  userSchema,
  userSchemaPatch,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { userSchemaRequest } from "../schemas/users.schema";
import { userSchemaResponse } from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserLogin = z.infer<typeof userLoginSchema>;
type TUsersResponde = z.infer<typeof usersSchemaResponse>;
type TUserPatch = z.infer<typeof userSchemaPatch>;

type TLogin = {
  token: string;
};

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserLogin,
  TLogin,
  TUsersResponde,
  TUserPatch,
};
