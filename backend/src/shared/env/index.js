import {config} from 'dotenv';
config();

export const env = {
    port: process.env.SERVER_PORT || 3333,
    token: {
        secret: process.env.TOKEN_SECRET,
    },
    database: {
        base_url: process.env.DB_URL,
        base_name: process.env.DB_NAME,
    },
};
