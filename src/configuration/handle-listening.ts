import { Application } from 'https://deno.land/x/oak/mod.ts';

export const handleListening = (app: Application) => {
  app.addEventListener('listen', (event) => {
    console.log(
      'Application started. ' +
        `Listening on: ${event.secure ? 'https://' : 'http://'}` +
        `${event.hostname ?? 'localhost'}:${event.port}`,
    );
  });
  return app;
};
