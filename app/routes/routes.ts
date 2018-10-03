import { SettingsController } from './../controllers/settingsController';
import { Request, Response } from "express";
import express from 'express';

export class Routes {
    public settingsController: SettingsController = new SettingsController();

    public routes(app: express.Application): void {
        app.route('/').get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Hello from base route.'
            })
        })
        app.route('/settings').post(this.settingsController.addNewSettings);
    }
}