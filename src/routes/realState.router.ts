import { Router } from "express";
import {
  createRealStateController,
  listenRealStateController,
} from "../controllers/realEstate.controller";
import validateBody from "../middlewares/validateBody.middleware";
import {
  realEstateSchemaRequest,
  realStateSchema,
} from "../schemas/realEstate.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middeware";
import ensureAdminToken from "../middlewares/validateAdmin.middleware";
import ensureAddressMiddleware from "../middlewares/ensureAddress.middleare";

const realStateRouter: Router = Router();

realStateRouter.post(
  "",
  validateBody(realEstateSchemaRequest),
  validateTokenMiddleware,
  ensureAdminToken,
  ensureAddressMiddleware,
  createRealStateController
);
realStateRouter.get("", listenRealStateController);

export default realStateRouter;
