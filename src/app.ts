import * as express from 'express';
import { Application } from 'express';
import RouteService from './router/routeService';

class App {
    public app: Application;
    public port: number;
    private router: RouteService;
    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.router = new RouteService(this.app);

    }

    public start(): void {
        this.router.run();
        this.app.listen(this.port, () => {
            console.log(`App is running ... `);
        });
    }
}
export default App;