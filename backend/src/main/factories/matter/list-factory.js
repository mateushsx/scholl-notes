import {UserDataAccess} from '../../../data/user/index.js';
import {MatterDataAccess} from '../../../data/matter/index.js';
import {ListMatterController} from '../../../controllers/matter/list/index.js';
import {ListMatterUseCase} from '../../../usecases/matter/list-matter/index.js';

export async function listMatterFactory(request, response) {
    const matterDataAccess = new MatterDataAccess();
    const userDataAccess = new UserDataAccess();

    const listMatterUseCase = new ListMatterUseCase(
        matterDataAccess,
        userDataAccess
    );
    const listMatterController = new ListMatterController(listMatterUseCase);

    return listMatterController.handler({request, response});
}
