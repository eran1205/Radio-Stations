import { Document } from 'mongoose';

export interface RadioStation extends Document {
    readonly title: string;
    readonly description: string;
    readonly logo: string;
    readonly src: string;
    readonly created_at: Date;
}
