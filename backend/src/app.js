import {userRoutes} from './routes/user/index.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function appRoutes(app) {
    app.register(userRoutes);
}
