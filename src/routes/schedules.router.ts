import { Router } from "express";
import {
  createSchedulesController,
  listenSchedulesRealStateController,
} from "../controllers/schedules.controller";
import validateTokenMiddleware from "../middlewares/validateToken.middeware";
import ensureAdminToken from "../middlewares/validateAdmin.middleware";
import validateBody from "../middlewares/validateBody.middleware";
import { schedulesSchemaRequest } from "../schemas/schendules.schema";
import verifyDateScheduleImmobileMiddleare from "../middlewares/verifyDateScheduleImmobile.middleware";
import verifyDateScheduleUserMiddleware from "../middlewares/verifydateScheduleUser.middleware";

console.log("subindo repositório");
const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  validateTokenMiddleware,
  validateBody(schedulesSchemaRequest),
  createSchedulesController
);
schedulesRouter.get(
  "/realEstate/:id",
  validateTokenMiddleware,
  ensureAdminToken,
  listenSchedulesRealStateController
);

export default schedulesRouter;
