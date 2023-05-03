import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  editUserController,
  listenUserController,
} from "../controllers/users.controller";

const userRouter: Router = Router();

userRouter.post("", createUserController);
userRouter.get("", listenUserController);
userRouter.patch("/:id", editUserController);
userRouter.delete("/id", deleteUserController);

export default userRouter;
