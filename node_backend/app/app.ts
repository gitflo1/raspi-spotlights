import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Routes } from "./routes/routes"

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://localhost/raspi';  

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, err => {
            if (err) {
                console.log(err.message);
            } else {
                console.log("Successfully connected to mongoDb: " + this.mongoUrl)
            }
        });    
    }
}

export default new App().app;