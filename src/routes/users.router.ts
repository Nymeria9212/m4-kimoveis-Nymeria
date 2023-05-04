import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  editUserController,
  listenUserController,
} from "../controllers/users.controller";
import { emailUserExistMiddleware } from "../middlewares/emailExists.middleware";
import validateBody from "../middlewares/validateBody.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBody(userSchemaRequest),
  emailUserExistMiddleware,
  createUserController
);
userRouter.get("", listenUserController);
userRouter.patch("/:id", editUserController);
userRouter.delete("/id", deleteUserController);

export default userRouter;
