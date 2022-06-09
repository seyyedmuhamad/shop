import { Router } from "express";
import ProductsController from "./productsController";
const productsControllerInstance = new ProductsController();

const productsRouter: Router = Router();

productsRouter.get('/', productsControllerInstance.index);

export default productsRouter;