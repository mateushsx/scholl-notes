export class UpdateMatterController {
    constructor(updateMatterUseCase) {
        this.updateMatterUseCase = updateMatterUseCase;
    }

    async handler({request, response}) {
        try {
            const payload = request.body;
            if (JSON.stringify(payload) === '{}') {
                return response.status(204).json({message: 'payload is empty'});
            }

            const result = await this.updateMatterUseCase.execute(payload);

            return response.status(202).send(result);
        } catch (error) {
            return response.send(error);
        }
    }
}
