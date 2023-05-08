import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validateBody = schema.parse(req.body);

    req.body = validateBody;

    return next();
  };
export default validateBody;
