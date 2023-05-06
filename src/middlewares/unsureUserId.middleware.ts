import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userfind: User | null = await userRepository.findOneBy({ id: id });

  if (!userfind) {
    throw new AppError("User not found", 404);
  }

  return next();
};
export default ensureUserIdMiddleware;
