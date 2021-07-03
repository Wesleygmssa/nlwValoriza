import { Request, Response } from "express";
import { AuthenticateUserSerivice } from "../services/AuthenticateUserService";
class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserSerivice();
    const token = await authenticateUserService.execute({
      email,
      password,
    });

    return response.json(token);
  }
}
export { AuthenticateUserController };
