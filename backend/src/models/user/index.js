import {model, Schema} from 'mongoose';

const schema = Schema({
    id: String,
    name: String,
    email: String,
    password: String,
});

export const UserModel = model('User', schema);
