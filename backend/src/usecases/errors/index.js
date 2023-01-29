export class MissingParamError extends Error {
    constructor(paramName) {
        super();
        this.name = 'MissingParamError';
        this.message = `Missing or invalid ${paramName} parameter.`;
    }
}

export class AlreadyExistsError extends Error {
    constructor(paramName) {
        super();
        this.name = 'AlreadyExistsError';
        this.message = `This ${paramName} already exists.`;
    }
}
