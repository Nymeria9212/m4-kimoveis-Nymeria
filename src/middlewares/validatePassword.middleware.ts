import { NextFunction, Request, Response } from "express";
import { TUserLogin } from "../interfaces/users.types";
import * as bcrypt from "bcryptjs";
import { AppError } from "../errors";

const validatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TUserLogin = req.body;

  const user = res.locals.user;
  const passwordValid: boolean = await bcrypt.compare(
    userData.password,
    user.password
  );

  if (!passwordValid) {
    throw new AppError("Invalid credentials", 401);
  }

  return next();
};

export default validatePassword;
