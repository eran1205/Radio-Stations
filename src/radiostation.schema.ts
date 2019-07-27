import * as mongoose from 'mongoose';

export const RadioStationSchema = new mongoose.Schema({
    title: String,
    description: String,
    logo: String,
    src: String,
    created_at: { type: Date, default: Date.now },
});
