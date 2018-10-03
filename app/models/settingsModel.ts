import mongoose from 'mongoose';
import { Int32 } from 'bson';

const Schema = mongoose.Schema;

export const SettingsSchema = new Schema({
    interval_timer: Int32 
})