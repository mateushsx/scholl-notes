export class SignupController {
    constructor(signUserUseCase) {
        this.signUserUseCase = signUserUseCase;
    }

    async handler({request, response}) {
        try {
            const payload = request.body;
            if (JSON.stringify(payload) === '{}') {
                return response.status(204).json({message: 'payload is empty'});
            }

            const result = await this.signUserUseCase.execute(payload);

            return response.status(201).send(result);
        } catch (error) {
            return response.send(error);
        }
    }
}
