import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";
import { NextFunction, Request, Response } from "express";
import { TUserLogin } from "../interfaces/users.types";

const ensureUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const dataUser: TUserLogin = req.body;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { email: dataUser.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  if (user.deletedAt !== null) {
    throw new AppError("Invalid credentials", 401);
  }
  console.log(user);
  res.locals.user = user;
  next();
};

export { ensureUserLogin };
