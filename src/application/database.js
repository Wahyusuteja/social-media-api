import { PrismaClient } from "@prisma/client";
import { Logger } from "./logging.js";

export const PrismaClient = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        }, {
            emit: 'event',
            level: 'error'
        },
        {
            emit: 'event',
            level: 'info'
        },
        {
            emit: 'event',
            level: 'warn'
        }
    ]
});

prismaClient.$on('error', (e) => {
    loggers.error(e)
});

prismaClient.$on('warn', (e) => {
    loggers.warn(e)
});

prismaClient.$on('info', (e) => {
    loggers.info(e)
});

prismaClient.$on('query', (e) => {
    loggers.info(e)
});