import {listMatterFactory} from '../../main/factories/matter/list-factory.js';
import {registerMatterFactory} from '../../main/factories/matter/register-factory.js';
import {updateMatterFactory} from '../../main/factories/matter/update-factory.js';
import {deleteMatterFactory} from '../../main/factories/matter/delete-factory.js';

/**
 *
 * @param {import('fastify').FastifyInstance} app
 */
export async function matterRoutes(app) {
    app.post('/matter/register', registerMatterFactory);
    app.post('/matter/list', listMatterFactory);
    app.put('/matter/update/:id', updateMatterFactory);
    app.delete('/matter/delete/:id', deleteMatterFactory);
}
