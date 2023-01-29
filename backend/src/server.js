import Fastify from 'fastify';
import {appRoutes} from './app.js';
import {env} from './shared/env/index.js';
import {databaseConnect} from './database.js';
import {errorHandler} from './middlewares/error-handler.js';

export const server = Fastify();

server.setErrorHandler(errorHandler);
server.register(appRoutes);

const start = async () => {
    try {
        const connection = await databaseConnect();

        if (connection) {
            server.listen({port: env.port});
            console.log(`🎯 server running at: http://localhost:${env.port}/`);
        }
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
