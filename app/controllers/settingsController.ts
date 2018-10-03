import mongoose from 'mongoose';
import { Router, Request, Response } from 'express';
import { SettingsSchema } from './../models/settingsModel';

const Settings = mongoose.model('Settings', SettingsSchema);

export class SettingsController{

    public addNewSettings(req: Request, res: Response) {
        let newSettings = new Settings(req.body);

        newSettings.save((err, settings) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(settings);
        })
    }

    public getTimer(req: Request, res: Response) {
        // todo!
    }
}