import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserSerivice {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UsersRepositories);
    //verificar se email existe
    const user = await userRepositories.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }
    // verificar se a senha está correta
    // 123456 // jasjiajfakasfjka
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    // Gerar token
    const token = sign(
      {
        email: user.email,
      },
      "jsjsgfs5255454slsnskfgs4544f",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserSerivice };
