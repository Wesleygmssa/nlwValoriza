import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserSerivice } from "./services/AuthenticateUserService";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentContoller } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserControler = new AuthenticateUserController();
const createComlimentController = new CreateComplimentContoller();

// router.use(ensureAdmin);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserControler.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComlimentController.handle
);

export { router };
