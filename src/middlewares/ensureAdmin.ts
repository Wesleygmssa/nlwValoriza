import { Request, Response, NextFunction, request } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  resquest: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request;
  const usersRepositories = getCustomRepository(UsersRepositories);
  const { admin } = await usersRepositories.findOne(user_id);

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Aunathorized",
  });
}
