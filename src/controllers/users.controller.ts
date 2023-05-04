import { Request, Response } from "express";
import { TUserResponse } from "../interfaces/users.types";
import { createUserService } from "../services/createUser.services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse>> => {
  const userData = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};
const listenUserController = async (req: Request, res: Response) => {};
const editUserController = async (req: Request, res: Response) => {};
const deleteUserController = async (req: Request, res: Response) => {};

export {
  createUserController,
  listenUserController,
  editUserController,
  deleteUserController,
};
