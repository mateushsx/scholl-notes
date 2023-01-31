import {signinFactory} from '../../main/factories/user/signin-factory.js';
import {signupFactory} from '../../main/factories/user/signup-factory.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function userRoutes(app) {
    app.post('/user/signup', signupFactory);
    app.post('/user/signin', signinFactory);
}
