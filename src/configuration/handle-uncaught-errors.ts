import { Application } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationPipeStep } from '../types/misc.ts';

export class HandleUncaughtErrors extends ApplicationPipeStep {
  public process(app: Application) {
    app.addEventListener('error', (event) => {
      console.error(event.message);
    });
  }
}
