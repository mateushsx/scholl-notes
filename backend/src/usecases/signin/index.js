import {isValidEmail, isValidPassword} from '../../shared/validators';
import {MissingParamError, NotFoundError} from '../errors';

export class SigninUseCase {
    constructor(userDataAccess, encrypter, tokenManager) {
        this.userDataAccess = userDataAccess;
        this.encrypter = encrypter;
        this.tokenManager = tokenManager;
    }

    async execute(userLogin) {
        if (!isValidEmail(userLogin.email)) {
            throw new Error(MissingParamError('email'));
        }
        if (!isValidPassword(userLogin.password)) {
            throw new Error(MissingParamError('password'));
        }

        const user = {
            email: userLogin.email,
            password: userLogin.password,
        };

        const userExists = await this.userDataAccess.findByEmail(user.email);

        if (!userExists) {
            throw new NotFoundError('user');
        }

        const hash = await this.encrypter.decrypt({
            plain: user.password,
            hash: userExists.password,
        });

        if (!hash) {
            throw new Error('passwords are not the same');
        }

        delete userExists.password;
        const token = await this.tokenManager.sign({
            key: {id: userExists.id},
        });

        return {
            id: userExists.id,
            token,
        };
    }
}
