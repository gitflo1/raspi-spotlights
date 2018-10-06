import { SettingController } from './../controllers/settingController';
import { Request, Response } from "express";
import express from 'express';

export class Routes {
    public settingController: SettingController = new SettingController();

    public routes(app: express.Application): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello from base route.'
            })
        })

        app.route('/setting').post(this.settingController.addNewSetting);

        app.route('/setting/:settingId')
    }

}