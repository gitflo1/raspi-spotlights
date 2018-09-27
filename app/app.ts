import express from 'express';
import bodyParser from "body-parser";
import { Routes } from "./routes/routes"
import { WelcomeController } from './controllers';

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))

        // register controller
        this.app.use('/welcome', WelcomeController)
    }
}

export default new App().app;