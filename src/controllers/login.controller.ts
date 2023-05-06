import { Request, Response } from "express";
import loginUserService from "../services/login/login.services";
import { TLogin } from "../interfaces/users.types";

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response<TLogin>> => {
  const sessionUser = await loginUserService(res);
  return res.status(200).json(sessionUser);
};

export default loginUserController;
