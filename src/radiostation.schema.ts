import * as mongoose from 'mongoose';

export const RadioStationSchema = new mongoose.Schema({
    title: String,
    description: String,
    logo: String,
    created_at: { type: Date, default: Date.now },
});
