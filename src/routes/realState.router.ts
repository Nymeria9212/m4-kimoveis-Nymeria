import { Router } from "express";
import {
  createRealStateController,
  listenRealStateController,
} from "../controllers/realStgate.controller";
import validateBody from "../middlewares/validateBody.middleware";
import {
  realEstateSchemaRequest,
  realStateSchema,
} from "../schemas/realEstate.schema";
import validateTokenMiddleware from "../middlewares/validateToken.middeware";
import ensureAdminToken from "../middlewares/validateAdmin.middleware";

const realStateRouter: Router = Router();

realStateRouter.post(
  "",
  validateBody(realEstateSchemaRequest),
  createRealStateController
);
realStateRouter.get("", listenRealStateController);

export default realStateRouter;
