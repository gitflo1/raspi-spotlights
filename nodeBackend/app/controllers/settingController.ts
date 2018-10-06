import { Request, Response } from 'express';
import Setting from './../models/settingModel';

export class SettingController{

    public updateSetting(req: Request, res: Response) {
        Setting.findOneAndUpdate({ _id: 42 }, req.body, { upsert: true, new: true }, (err, setting) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(setting);
        });
    }

    public getSetting(req: Request, res: Response) {
        Setting.findById(42, (err, setting) => {
            if (err) {
                res.send(err);
            }
            res.status(200).send(setting);
        })
    }
}