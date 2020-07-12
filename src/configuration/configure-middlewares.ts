import { Application, Middleware } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationPipeStep } from '../types/misc.ts';

export class ConfigureMiddlewares extends ApplicationPipeStep {
  public middlewares: Middleware[];

  constructor(middlewares: Middleware[]) {
    super();
    this.middlewares = middlewares;
  }

  public process(app: Application) {
    for (const middleware of this.middlewares) {
      app.use(middleware);
    }
  }
}
