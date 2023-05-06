import { Request, Response } from "express";
import {
  TCategorieRequest,
  TCategorieResponse,
} from "../interfaces/categories.type";
import createCategoryService from "../services/categories/createCategories.services";
import listCategoriesService from "../services/categories/listCategories.services";

const createCategoryController = async (req: Request, res: Response) => {
  const dataBody: TCategorieRequest = req.body;

  const newCategory = await createCategoryService(dataBody);

  return res.status(201).json(newCategory);
};
const listenCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response<TCategorieResponse>> => {
  const listCategories = await listCategoriesService();

  return res.status(200).json(listCategories);
};
const readCategoryIdController = async (req: Request, res: Response) => {};

export {
  createCategoryController,
  listenCategoriesController,
  readCategoryIdController,
};
