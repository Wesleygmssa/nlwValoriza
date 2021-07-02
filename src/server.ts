import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";
// @types/express
const app = express();
app.use(express.json());
app.use(router);

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
