import { NextFunction, Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/schedules.types";

const verifyDateScheduleImmobileMiddleare = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const dataBody: TScheduleRequest = req.body;
};

export default verifyDateScheduleImmobileMiddleare;
