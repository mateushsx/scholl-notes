import {UserDataAccess} from '../../../data/user/index.js';
import {Encrypter} from '../../../services/encrypter/index.js';
import {SigninUseCase} from '../../../usecases/signin/index.js';
import {SigninController} from '../../../controllers/signin/index.js';
import {TokenManager} from '../../../services/token/index.js';

export async function signinFactory(request, response) {
    const userDataAccess = new UserDataAccess();
    const encrypter = new Encrypter();
    const tokenManager = new TokenManager();
    const signinUseCase = new SigninUseCase(
        userDataAccess,
        encrypter,
        tokenManager
    );

    const signinController = new SigninController(signinUseCase);
    return signinController.handler({request, response});
}
