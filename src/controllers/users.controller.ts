import { Request, Response } from "express";
import {
  TUserPatch,
  TUserRequest,
  TUserResponse,
} from "../interfaces/users.types";
import { createUserService } from "../services/users/createUser.services";
import listeAllUsers from "../services/users/listeAllUsers.services";
import updateUserServices from "../services/users/updateUserServices";
import { AppError } from "../errors";
import deleteUserServices from "../services/users/deleteUser.services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response<TUserResponse>> => {
  const userData: TUserRequest = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listenUserController = async (req: Request, res: Response) => {
  const usersBD = await listeAllUsers();
  return res.status(200).json(usersBD);
};

const editUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: Partial<TUserRequest> = req.body;
  const id: number = parseInt(req.params.id);
  const admin = res.locals.admin;
  const userId: number = parseInt(res.locals.id);

  if (id === userId) {
    const updateUser = await updateUserServices(userData, id);
    return res.status(200).json(updateUser);
  }

  if (admin) {
    const updateUser = await updateUserServices(userData, id);
    return res.status(200).json(updateUser);
  }

  throw new AppError("Insufficient permission", 403);
};

const deleteUserController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);

  await deleteUserServices(id);
  return res.status(204).send();
};

export {
  createUserController,
  listenUserController,
  editUserController,
  deleteUserController,
};
