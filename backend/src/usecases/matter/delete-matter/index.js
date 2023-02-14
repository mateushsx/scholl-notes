import {MissingParamError, NotFoundError} from '../../errors/index.js';

export class DeleteMatterUseCase {
    constructor(matterDataAccess) {
        this.matterDataAccess = matterDataAccess;
    }

    async execute(id) {
        if (!id) {
            throw new MissingParamError('id');
        }

        const matterExists = await this.matterDataAccess.findById(id);
        if (!matterExists) {
            throw new NotFoundError('matter');
        }

        await this.matterDataAccess.delete(id);
        return {id};
    }
}
