import { Application } from 'https://deno.land/x/oak/mod.ts';
import infoRouter from '../routers/info-router.ts';
import { ApplicationFn } from '../types/misc.ts';

export const configureRouters: ApplicationFn = (app: Application) => {
  app.use(infoRouter.routes());
  app.use(infoRouter.allowedMethods());
};
