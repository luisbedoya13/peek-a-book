import { Application } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationPipeStep } from '../types/misc.ts';

export class HandleListening extends ApplicationPipeStep {
  public process(app: Application) {
    app.addEventListener('listen', (event) => {
      console.log(
        `Listening on: ${event.secure ? 'https://' : 'http://'}` +
          `${event.hostname ?? 'localhost'}:${event.port}`,
      );
    });
  }
}
