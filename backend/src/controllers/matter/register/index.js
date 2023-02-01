export class RegisterMatterController {
    constructor(registerMatterUseCase) {
        this.registerMatterUseCase = registerMatterUseCase;
    }

    async handler({request, response}) {
        try {
            const payload = request.body;
            if (JSON.stringify(payload) === '{}') {
                return response.status(204).json({message: 'payload is empty'});
            }

            const result = await this.registerMatterUseCase.execute(payload);

            return response.status(202).send(result);
        } catch (error) {
            return response.send(error);
        }
    }
}
