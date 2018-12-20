import { Request, Response } from 'express';
import fs from 'fs';

export class SettingController {

    static filePath = "./setting.json";
    
    public updateSetting(req: Request, res: Response) {
        console.log("Update the settings: " + JSON.stringify(req.body));
        fs.writeFile(SettingController.filePath, JSON.stringify(req.body), err => {
            if (err) {
                res.status(500).send(err);
                console.log(err);
            }
        })
    }

    public getSettings(req: Request, res: Response) {
        fs.readFile(SettingController.filePath, (err, data) => {
            if (err) {
                res.status(404).send(err);
                console.log(err);
            }
            res.status(200).send(data);
        })
    }
}