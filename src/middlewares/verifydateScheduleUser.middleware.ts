import { NextFunction, Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.types";

const verifyDateScheduleUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.id;
  const dataBody: TScheduleRequest = req.body;
};
export default verifyDateScheduleUserMiddleware;
