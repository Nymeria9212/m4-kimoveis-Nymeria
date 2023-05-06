import { sign } from "jsonwebtoken";
import { Response } from "express";

const loginUserService = async (res: Response) => {
  const user = res.locals.user;

  const token = sign({ admin: user.admin }, String(process.env.SECRET_KEY!), {
    expiresIn: process.env.EXPIRES_IN,
    subject: String(user.id),
  });

  return { token };
};

export default loginUserService;
