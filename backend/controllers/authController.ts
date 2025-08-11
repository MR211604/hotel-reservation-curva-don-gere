import { Request, Response } from "express";
import { prisma } from "../database/connection";
import { generateJWT } from "../helpers/jwt";

export const authRegisterUser = () => {};

export const loginUser = () => {};

export const authRenewToken = async (req: Request, res: Response) => {
  const { id } = req.body;
  const foundUser = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  const token = await generateJWT(id);
  return res.status(200).json({
    ok: true,
    message: "Renew",
    token,
    user: foundUser,
  });
};
