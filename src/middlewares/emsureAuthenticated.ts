import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // token
  // Validar se token está preemchido
  const authtoken = request.headers.authorization;
  if (!authtoken) {
    return response.status(401).json({ message: "Token missing" });
  }

  const [, token] = authtoken.split("");

  try {
    // validar se tiken é valido
    const { sub } = verify(token, "jsjsgfs5255454slsnskfgs4544f") as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ message: "unauthorized user" });
  }

  //Recuperar informações do usuário
}
