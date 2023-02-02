import {MissingParamError, NotFoundError} from '../../errors/index.js';

export class ListMatterUseCase {
    constructor(matterDataAccess, userDataAccess) {
        this.matterDataAccess = matterDataAccess;
        this.userDataAccess = userDataAccess;
    }

    async execute({user_id}) {
        if (!user_id || typeof user_id !== 'string') {
            throw new MissingParamError('user_id');
        }

        const userExists = await this.userDataAccess.findById(user_id);
        if (!userExists) {
            throw new NotFoundError('user');
        }

        const mattersData = await this.matterDataAccess.all(user_id);

        const matters = mattersData.map((matter) => {
            return {
                id: matter.id,
                user_id: matter.user_id,
                first_bimester: matter.first_bimester,
                second_bimester: matter.second_bimester,
                third_bimester: matter.third_bimester,
                fourth_bimester: matter.fourth_bimester,
            };
        });
        return matters;
    }
}
