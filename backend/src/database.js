import mongoose from 'mongoose';
import {env} from './shared/env/index.js';

export async function databaseConnect() {
    const url = `${env.database.base_url}${env.database.base_name}`;

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.set('strictQuery', true);

    return mongoose.connect(url, options).then(({connection}) => {
        return connection;
    });

    // `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
