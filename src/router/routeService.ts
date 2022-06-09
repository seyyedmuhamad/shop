import { Application, Request, Response, Router} from "express";
import usersRouter from '../components/users/usersRouter';
import RouteEngine from "./router";
import productsRouter from '../components/products/productsRouter';

class RouteService {
    private app: Application;
    private router: RouteEngine;

    public constructor(app: Application) {
        this.app = app;
        this.router = new RouteEngine;
        this.bindRouters();
    }

    public bindRouters(){
        this.router.registerRouter("/api/v1/users", usersRouter);
        this.router.registerRouter("/api/v1/products", productsRouter);
    }

    public run(): void {
        this.router.getRouter().forEach((router: Router, route: string) => {
            this.app.use(route, router);
        });
    }
}

export default RouteService;

