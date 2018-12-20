import { SettingController } from './../controllers/settingController';
import { Request, Response } from "express";
import express from 'express';
import cors from "cors";
import path from "path";

export class Routes {
    public settingController: SettingController = new SettingController();

    public routes(app: express.Application): void {
        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
        };
        
        app.use(cors(options));
        app.use(express.static(__dirname + '/../../../ngFrontend/dist/ngFrontend'));
        app.route('*').options(cors(options));

        app.route('/').get((req: Request, res: Response) => {
            res.status(200).sendFile(path.join(__dirname, '/../../../dist/ngFrontend'));
        });

        app.route('/settings').put(this.settingController.updateSetting);
        app.route('/settings').get(this.settingController.getSettings);
    }
}