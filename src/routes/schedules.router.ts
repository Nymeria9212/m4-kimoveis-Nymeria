import { Router } from "express";
import {
  createSchedulesController,
  listenSchedulesRealStateController,
} from "../controllers/schedules.controller";

const schedulesRouter: Router = Router();

schedulesRouter.post("", createSchedulesController);
schedulesRouter.get("/realEstate/:id", listenSchedulesRealStateController);

export default schedulesRouter;
