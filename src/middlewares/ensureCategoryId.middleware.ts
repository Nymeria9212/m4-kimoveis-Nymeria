import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const ensureCategoryMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryId: Category | null = await categoryRepository.findOne({
    where: { id: id },
  });

  if (!categoryId) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export default ensureCategoryMiddleware;
