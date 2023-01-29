import jwt from 'jsonwebtoken';
import {env} from '../../shared/env/index.js';

export class TokenManager {
    async sign({key, expirationInMs}) {
        const expiration = expirationInMs ? expirationInMs : '1d';
        const token = jwt.sign(key, env.token.secret, {expiresIn: expiration});
        return token;
    }
    async verify({token}) {
        let response = {};

        jwt.verify(token, env.token.secret, (error, decoder) => {
            if (error) {
                return (response = {
                    status: false,
                    data: error.message,
                });
            }
            return (response = {
                status: true,
                data: decoder,
            });
        });

        return response;
    }
}
