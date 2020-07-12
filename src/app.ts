import { Application } from 'https://deno.land/x/oak/mod.ts';
import { config } from './utils/config.ts';
import { errorsMiddleware } from './middlewares/errors-middleware.ts';
import { initializationPipe } from './configuration/initialization-pipe.ts';
import { handleUncaughtErrors } from './configuration/handle-uncaught-errors.ts';
import { handleListening } from './configuration/handle-listening.ts';
import { configureRouters } from './configuration/configure-routers.ts';
import { initDatabase } from './configuration/init-database.ts';

// Init server
const application = new Application();

initializationPipe(application, [
  initDatabase, // Init DB and configure models
  configureRouters, // Adding routers
  handleUncaughtErrors, // handling uncaught errors
  handleListening, // Output for dev purposes
]);

// errors middleware
application.use(errorsMiddleware);

await application.listen({ ...config.server });
