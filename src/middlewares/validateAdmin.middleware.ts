import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const ensureAdminToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const admin = res.locals.admin;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
export default ensureAdminToken;
