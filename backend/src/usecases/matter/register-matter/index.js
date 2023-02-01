import crypto from 'crypto';
import {isValidNumber} from '../../../shared/validators/index.js';
import {MissingParamError, NotFoundError} from '../../errors/index.js';

export class RegisterMatterUseCase {
    constructor(matterDataAccess, userDataAccess) {
        this.matterDataAccess = matterDataAccess;
        this.userDataAccess = userDataAccess;
    }

    async execute(matter) {
        if (!matter.user_id) {
            throw new MissingParamError('user_id');
        }
        if (!isValidNumber(matter.first_bimester)) {
            throw new MissingParamError('first_bimester');
        }
        if (!isValidNumber(matter.second_bimester)) {
            throw new MissingParamError('second_bimester');
        }
        if (!isValidNumber(matter.third_bimester)) {
            throw new MissingParamError('third_bimester');
        }
        if (!isValidNumber(matter.fourth_bimester)) {
            throw new MissingParamError('fourth_bimester');
        }

        const userExists = await this.userDataAccess.findById(matter.user_id);
        if (!userExists) {
            throw new NotFoundError('user');
        }

        matter.id = crypto.randomUUID();

        const {id} = await this.matterDataAccess.save(matter);
        return {matter_id: id};
    }
}
