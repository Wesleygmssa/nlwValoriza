import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserSerivice } from "./services/AuthenticateUserService";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentContoller } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserControler = new AuthenticateUserController();
const createComlimentController = new CreateComplimentContoller();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

const listUserReceiveComplimentsContoller =
  new ListUserReceiveComplimentsController();

const listTagsContoller = new ListTagsController();

const listUserController = new ListUsersController();

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

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsContoller.handle
);

router.get("/tags", ensureAuthenticated, listTagsContoller.handle);

router.get("/users", ensureAuthenticated, listUserController.handle);

export { router };
