import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { TUserRequest } from "../interfaces/users.types";

const emailUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const data: TUserRequest = req.body;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userExist = await userRepository.findOne({
    where: { email: data.email },
  });
  if (userExist) {
    return res.status(409).json({ message: "Email already exists" });
  }

  return next();
};

export { emailUserExistMiddleware };
