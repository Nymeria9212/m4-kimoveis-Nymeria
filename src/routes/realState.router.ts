import { Router } from "express";
import {
  createRealStateController,
  listenRealStateController,
} from "../controllers/realStgate.controller";

const realStateRouter: Router = Router();

realStateRouter.post("", createRealStateController);
realStateRouter.get("", listenRealStateController);

export default realStateRouter;
