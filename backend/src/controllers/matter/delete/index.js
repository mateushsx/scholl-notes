export class DeleteMatterController {
    constructor(deleteMatterUseCase) {
        this.deleteMatterUseCase = deleteMatterUseCase;
    }

    async handler({request, response}) {
        try {
            const {id} = request.params;

            if (!id) {
                return response
                    .status(204)
                    .json({message: 'param "id" is required'});
            }

            const result = await this.deleteMatterUseCase.execute(id);

            return response.status(202).send(result);
        } catch (error) {
            return response.send(error);
        }
    }
}
