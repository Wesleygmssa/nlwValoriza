import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentContoller {
  async handle(request: Request, response: Response) {
    const createComplimentService = new CreateComplimentService();
  }
}

export { CreateComplimentContoller };
