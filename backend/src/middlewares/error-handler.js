export function errorHandler(error, request, reply) {
    this.log.error(error);
    reply.status(error.statusCode || 400).send(error);
}
