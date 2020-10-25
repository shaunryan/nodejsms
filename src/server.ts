import app from "./app";
import { appConfig } from "./config/appConfig";
import { logger } from "./config/logger";

const port:number = appConfig.port

app.listen(port, () => {
    logger.info(`Successfully started Node Server on Port ${appConfig.port} 🎉`);
});