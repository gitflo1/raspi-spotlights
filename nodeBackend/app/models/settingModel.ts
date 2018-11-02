import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ISetting extends mongoose.Document {
    _id: Number;
    last_updated: Date;
    interval_time: number;
    shutdown_time: number;
    shutdown_type: boolean;
    shutdown_on_second_signal: boolean;
}

export const SettingSchema = new Schema({
    _id: {type: Number, default: 42},
    last_updated: {type: Date, default: Date.now},
    interval_time: {type: Number, default: 1},
    shutdown_time: {type: Number, default: 1},
    shutdown_with_interval: {type: Boolean, default: false},
    shutdown_on_second_signal: {type: Boolean, default: false}
}, {_id: false})

const Setting = mongoose.model('Setting', SettingSchema);
export default Setting;