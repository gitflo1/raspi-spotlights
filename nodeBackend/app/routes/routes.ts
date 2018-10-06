import { SettingController } from './../controllers/settingController';
import { Request, Response } from "express";
import express from 'express';
import cors from "cors";



export class Routes {
    public settingController: SettingController = new SettingController();

    public routes(app: express.Application): void {
        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
        };
        
        app.use(cors(options));
        app.route('*').options(cors(options));

        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello from base route.'
            })
        })

        app.route('/setting').put(this.settingController.updateSetting)
        app.route('/setting').get(this.settingController.getSetting);
    }

}