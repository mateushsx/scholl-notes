import {UserModel} from '../../models/user/index.js';

export class UserDataAccess {
    async findByEmail(email) {
        const user = await UserModel.findOne({email: email});
        if (user && user.email) return user;
        return null;
    }

    async save(userInput) {
        const user = new UserModel(userInput);
        const userData = await user.save();

        return {id: userData.id};
    }
}
