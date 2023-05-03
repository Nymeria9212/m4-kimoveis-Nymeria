import { Router } from "express";
import {
  createCategoryController,
  listenCategoriesController,
  readCategoryIdController,
} from "../controllers/categories.controller";

const categoriesRouter: Router = Router();

categoriesRouter.post("", createCategoryController);
categoriesRouter.get("", listenCategoriesController);
categoriesRouter.get(":id/realEstate", readCategoryIdController);

export default categoriesRouter;
