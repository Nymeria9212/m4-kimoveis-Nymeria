import { Router } from "express";
import {
  createCategoryController,
  listenCategoriesController,
  readCategoryIdController,
} from "../controllers/categories.controller";
import validateBody from "../middlewares/validateBody.middleware";
import { categoriesSchemaRequest } from "../schemas/categories.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middeware";
import ensureAdminToken from "../middlewares/validateAdmin.middleware";
import ensureCategoryMiddleware from "../middlewares/ensureCategoryId.middleware";

const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  validateBody(categoriesSchemaRequest),
  validateTokenMiddleware,
  ensureAdminToken,
  createCategoryController
);
categoriesRouter.get("", listenCategoriesController);
categoriesRouter.get(
  "/:id/realEstate",
  ensureCategoryMiddleware,
  readCategoryIdController
);

export default categoriesRouter;
