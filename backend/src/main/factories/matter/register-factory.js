import {UserDataAccess} from '../../../data/user/index.js';
import {MatterDataAccess} from '../../../data/matter/index.js';
import {RegisterMatterUseCase} from '../../../usecases/matter/register-matter/index.js';
import {RegisterMatterController} from '../../../controllers/matter/register/index.js';

export async function registerMatterFactory(request, response) {
    const matterDataAccess = new MatterDataAccess();
    const userDataAccess = new UserDataAccess();

    const registerMatterUseCase = new RegisterMatterUseCase(
        matterDataAccess,
        userDataAccess
    );
    const registerMatterController = new RegisterMatterController(
        registerMatterUseCase
    );

    return registerMatterController.handler({request, response});
}
