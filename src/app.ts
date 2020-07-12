import { Application } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationPipe } from './configuration/application-pipe.ts';
import { config } from './utils/config.ts';
// Configuration steps
import { HandleUncaughtErrors } from './configuration/handle-uncaught-errors.ts';
import { HandleListening } from './configuration/handle-listening.ts';
import { ConfigureRouters } from './configuration/configure-routers.ts';
import { InitDatabase } from './configuration/init-database.ts';
import { ConfigureMiddlewares } from './configuration/configure-middlewares.ts';
// Single middlewares
import { errorsMiddleware } from './middlewares/errors-middleware.ts';
import { staticFilesMiddleware } from './middlewares/static-files-middleware.ts';
import { serverSecurityMiddleware } from './middlewares/server-security-middleware.ts';
// Models
import { Author } from './models/author.ts';
import { Book } from './models/book.ts';
// Routers
import infoRouter from './routers/info-router.ts';

const application = new Application();

ApplicationPipe(application, [
  new InitDatabase([Author, Book]),
  new ConfigureMiddlewares([errorsMiddleware, staticFilesMiddleware, serverSecurityMiddleware]),
  new ConfigureRouters([infoRouter]),
  new HandleUncaughtErrors(),
  new HandleListening(),
]);

await application.listen({ ...config.server });
