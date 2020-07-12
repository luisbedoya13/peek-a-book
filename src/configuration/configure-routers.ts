import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import infoRouter from '../routers/info-router.ts';
import { ApplicationPipeStep } from '../types/misc.ts';

export class ConfigureRouters extends ApplicationPipeStep {
  protected routers: Router[];

  constructor(routers: Router[]) {
    super();
    this.routers = routers;
  }

  public process(app: Application) {
    app.use(infoRouter.routes());
    app.use(infoRouter.allowedMethods());
  }
}
