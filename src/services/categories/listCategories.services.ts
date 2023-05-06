import { Response } from "express";
import {
  TCategorie,
  TCategorieResponse,
} from "../../interfaces/categories.type";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categoriesResponseSchema } from "../../schemas/categories.schema";

const listCategoriesService = async () => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category[] = await categoryRepository.find();

  const returnCategories = categoriesResponseSchema.parse(categories);

  return returnCategories;
};

export default listCategoriesService;
