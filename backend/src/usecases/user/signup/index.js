import crypto from 'crypto';

import {
    isValidName,
    isValidEmail,
    isValidPassword,
} from '../../../shared/validators/index.js';
import {AlreadyExistsError, MissingParamError} from '../../errors/index.js';

export class SignupUseCase {
    constructor(userDataAccess, encrypter, tokenManager) {
        this.userDataAccess = userDataAccess;
        this.encrypter = encrypter;
        this.tokenManager = tokenManager;
    }

    async execute(user) {
        if (!isValidName(user.name)) {
            throw new MissingParamError('name');
        }
        if (!isValidEmail(user.email)) {
            throw new MissingParamError('email');
        }
        if (!isValidPassword(user.password)) {
            throw new MissingParamError('password');
        }

        const userExists = await this.userDataAccess.findByEmail(user.email);

        if (userExists) {
            throw new AlreadyExistsError('user');
        }

        const hash = await this.encrypter.encrypt(user.password);
        user.password = hash;
        user.id = crypto.randomUUID();

        const {id} = await this.userDataAccess.save(user);
        const token = await this.tokenManager.sign({key: {id}});

        return {id, token};
    }
}
