import {UserDataAccess} from '../../../data/user/index.js';
import {Encrypter} from '../../../services/encrypter/index.js';
import {SignupUseCase} from '../../../usecases/signup/index.js';
import {SignupController} from '../../../controllers/signup/index.js';
import {TokenManager} from '../../../services/token/index.js';

export async function signupFactory(request, response) {
    const userDataAccess = new UserDataAccess();
    const encrypter = new Encrypter();
    const tokenManager = new TokenManager();
    const signupUseCase = new SignupUseCase(
        userDataAccess,
        encrypter,
        tokenManager
    );
    const signupController = new SignupController(signupUseCase);

    return await signupController.handler({request, response});
}
