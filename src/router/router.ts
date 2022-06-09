import { Router} from "express";


class RouteEngine {
    private routers:Map<string, Router> = new Map<string,Router>();

    public registerRouter(route: string, router: Router) {
        this.routers.set(route, router);
    }
    public getRouter(){
        return this.routers;
    }
}

export default RouteEngine;