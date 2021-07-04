import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

import "./database";
// @types/express
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

//Criar um class de error
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);
// app.get("/test", (request, response) => {
//   // Request => Entrando
//   // Response => Saindo
//   return response.send("Olá NLW");
// });

// app.post("/test-post", (request, response) => {
//   return response.send("Olá NLW método POST");
// });

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
