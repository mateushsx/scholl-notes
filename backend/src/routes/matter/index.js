import {registerMatterFactory} from '../../main/factories/matter/register-factory.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function matterRoutes(app) {
    app.post('/matter/register', registerMatterFactory);
}
