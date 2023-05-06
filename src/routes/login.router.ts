import { Router } from "express";
import loginUserController from "../controllers/login.controller";
import validateBody from "../middlewares/validateBody.middleware";
import { userLoginSchema } from "../schemas/users.schema";
import { ensureUserLogin } from "../middlewares/ensureUserLogin.middleware";
import validatePassword from "../middlewares/validatePassword.middleware";

const loginRouter: Router = Router();

loginRouter.post(
  "",
  validateBody(userLoginSchema),
  ensureUserLogin,
  validatePassword,
  loginUserController
);

export default loginRouter;
