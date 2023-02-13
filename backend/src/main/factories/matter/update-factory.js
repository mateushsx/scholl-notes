import {MatterDataAccess} from '../../../data/matter/index.js';
import {UpdateMatterController} from '../../../controllers/matter/update/index.js';
import {UpdateMatterUseCase} from '../../../usecases/matter/update-matter/index.js';

export async function updateMatterFactory(request, response) {
    const matterDataAccess = new MatterDataAccess();

    const updateMatterUseCase = new UpdateMatterUseCase(matterDataAccess);
    const updateMatterController = new UpdateMatterController(
        updateMatterUseCase
    );

    return updateMatterController.handler({request, response});
}
