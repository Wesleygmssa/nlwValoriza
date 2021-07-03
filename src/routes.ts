import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserSerivice } from "./services/AuthenticateUserService";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserControler = new AuthenticateUserController();

// router.use(ensureAdmin);
router.post("/users", createUserController.handle);

router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserControler.handle);

export { router };
