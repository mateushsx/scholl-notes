import {TokenManager} from '../services/token/index.js';

export function authMiddleware(request, response, done) {
    const tokenManager = new TokenManager();

    try {
        const token = request.headers.authorization;
        const {status, data} = tokenManager.verify({token});
        if (status) {
            request.token = data;
            return done();
        }

        if (!status) {
            response.status(401).send({
                message: 'Token is invalid or not authorized.',
            });
        }
    } catch (error) {
        response.status(401).send({
            message: 'You do not have access.',
        });
    }
}
