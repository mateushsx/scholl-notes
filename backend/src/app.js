import {userRoutes} from './routes/user/index.js';
import {matterRoutes} from './routes/matter/index.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function appRoutes(app) {
    app.register(userRoutes);
    app.register(matterRoutes);
}
