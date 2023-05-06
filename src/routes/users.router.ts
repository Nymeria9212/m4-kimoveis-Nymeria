import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  editUserController,
  listenUserController,
} from "../controllers/users.controller";
import { emailUserExistMiddleware } from "../middlewares/emailExists.middleware";
import validateBody from "../middlewares/validateBody.middleware";
import { userSchemaPatch, userSchemaRequest } from "../schemas/users.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middeware";
import ensureAdminToken from "../middlewares/validateAdmin.middleware";
import ensureUserIdMiddleware from "../middlewares/unsureUserId.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userSchemaRequest),
  emailUserExistMiddleware,
  createUserController
);
userRouter.get(
  "",
  validateTokenMiddleware,
  ensureAdminToken,
  listenUserController
);
userRouter.patch(
  "/:id",
  ensureUserIdMiddleware,
  validateBody(userSchemaPatch),
  validateTokenMiddleware,
  editUserController
);
userRouter.delete(
  "/:id",
  ensureUserIdMiddleware,
  validateTokenMiddleware,
  ensureAdminToken,
  deleteUserController
);

export default userRouter;
