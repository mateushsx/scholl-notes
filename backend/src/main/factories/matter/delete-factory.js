import {MatterDataAccess} from '../../../data/matter/index.js';
import {DeleteMatterController} from '../../../controllers/matter/delete/index.js';
import {DeleteMatterUseCase} from '../../../usecases/matter/delete-matter/index.js';

export async function deleteMatterFactory(request, response) {
    const matterDataAccess = new MatterDataAccess();

    const deleteMatterUseCase = new DeleteMatterUseCase(matterDataAccess);
    const deleteMatterController = new DeleteMatterController(
        deleteMatterUseCase
    );

    return deleteMatterController.handler({request, response});
}
