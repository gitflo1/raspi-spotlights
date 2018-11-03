import { Request, Response } from 'express';
import Setting from './../models/settingModel';

export class SettingController{

    public updateSetting(req: Request, res: Response) {
        Setting.findOneAndUpdate({ _id: 42 }, req.body, { upsert: true, new: true }, (err, setting) => {
            if(err){
                res.status(404).send(err);
                console.log(console.log(err));
            }
            res.status(200).json(setting);
        });
    }

    public getAllSettings(req: Request, res: Response) {
        Setting.find((err, setting) => {
            if (err) {
                res.status(404).send(err);
                console.log(console.log(err));
            }
            res.status(200).send(setting);
        })
    }

    public getOneSetting(req: Request, res: Response) {
        Setting.findById(req.params.id, (err, setting) => {
            if (err) {
                res.status(404).send(err);
                console.log(console.log(err));
            }
            res.status(200).send(setting);
        })
    }
}