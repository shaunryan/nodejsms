import yargs from 'yargs';

export interface AppConfig {
    logLevel: string;
    port: number;
}

const DEFAULT_LOG_LEVEL:string = 'info';
const DEFAULT_PORT:number = 5000;

export const appConfig: AppConfig = yargs(process.argv)
    .option('logLevel', {
        default: DEFAULT_LOG_LEVEL,
        description: 'Logging level to be applied to the service',
        type: 'string',
        alias: ['log-level', 'l'],
    })
    .option('port', {
        default: DEFAULT_PORT,
        description: 'The port of the application - defaults to 8074',
        type: 'number',
        alias: ['port', 'p'],
    })
    .config()
    .env('DEMO')
    .argv as AppConfig;
