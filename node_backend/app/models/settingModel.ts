import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ISetting extends mongoose.Document {
    last_updated: Date;
    interval_timer: number;
}

export const SettingSchema = new Schema({
    last_updated: {type: Date, default: Date.now},
    interval_timer: {type: Number, required: true}
})

const Setting = mongoose.model('Setting', SettingSchema);
export default Setting;