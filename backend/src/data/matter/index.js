import {MatterModel} from '../../models/matter/index.js';

export class MatterDataAccess {
    async save(matterInput) {
        const matter = new MatterModel(matterInput);
        const matterData = await matter.save();

        return {id: matterData.id};
    }

    async findById(id) {
        const matter = await MatterModel.findOne({id});
        if (matter && matter.id) return matter;
        return null;
    }

    async all(user_id) {
        const matters = await MatterModel.find({user_id});
        return matters;
    }
}
