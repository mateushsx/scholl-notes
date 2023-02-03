import {MissingParamError, NotFoundError} from '../../errors/index.js';

export class UpdateMatterUseCase {
    constructor(matterDataAccess) {
        this.matterDataAccess = matterDataAccess;
    }

    async execute(id, updates) {
        if (!updates) {
            throw new MissingParamError('updates');
        }

        const matterExists = await this.matterDataAccess.findById(id);
        if (!matterExists) {
            throw new NotFoundError('matter');
        }

        await this.matterDataAccess.update(id, updates);
        return {id};
    }
}
