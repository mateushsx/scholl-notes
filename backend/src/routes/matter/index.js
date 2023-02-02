import {listMatterFactory} from '../../main/factories/matter/list-factory.js';
import {registerMatterFactory} from '../../main/factories/matter/register-factory.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function matterRoutes(app) {
    app.post('/matter/register', registerMatterFactory);
    app.post('/matter/list', listMatterFactory);
}
