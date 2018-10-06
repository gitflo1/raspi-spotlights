import { Request, Response } from 'express';
import Setting from './../models/settingModel';

export class SettingController{

    public addNewSetting(req: Request, res: Response) {
        let newSetting = new Setting(req.body);

        newSetting.save((err, setting) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(setting);
        })
    }

    public getTimer(req: Request, res: Response) {
        Setting.findById(req.params.settingId, (err, setting) => {
            if (err) {
                res.send(err);
            }
            res.status(200).send(setting);
        })
    }
}