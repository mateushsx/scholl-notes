export class ListMatterController {
    constructor(listMatterUseCase) {
        this.listMatterUseCase = listMatterUseCase;
    }

    async handler({request, response}) {
        try {
            const payload = request.body;
            if (JSON.stringify(payload) === '{}') {
                return response.status(204).send({message: 'payload is empty'});
            }

            const result = await this.listMatterUseCase.execute(payload);

            return result;
        } catch (error) {
            return response.send(error);
        }
    }
}
