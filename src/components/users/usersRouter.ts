import { Router } from "express";
import UsersController from "./usersController";
const usersControllerInstance = new UsersController();

const usersRouter: Router = Router();

usersRouter.get('/', usersControllerInstance.index);

export default usersRouter;