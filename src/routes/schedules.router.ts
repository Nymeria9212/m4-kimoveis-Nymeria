import { Router } from "express";
import {
  createSchedulesController,
  listenSchendulesRealStateController,
} from "../controllers/schedules.controller";

const schedulesRouter: Router = Router();

schedulesRouter.post("", createSchedulesController);
schedulesRouter.get("/realEstate/:id", listenSchendulesRealStateController);

export default schedulesRouter;
