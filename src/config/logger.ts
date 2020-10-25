
import winston from 'winston';
import {appConfig} from './appConfig';
import {format} from "winston";

export const logger = winston.createLogger({
  level: appConfig.logLevel,
  transports: [
    new winston.transports.Console({
        format: format.combine(
            format.timestamp(),
            format.json()
        )
    })
  ],
});
