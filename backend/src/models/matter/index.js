import {model, Schema} from 'mongoose';

const schema = new Schema({
    id: String,
    user_id: String,
    first_bimester: Number,
    second_bimester: Number,
    third_bimester: Number,
    fourth_bimester: Number,
});

export const MatterModel = model('Matter', schema);
