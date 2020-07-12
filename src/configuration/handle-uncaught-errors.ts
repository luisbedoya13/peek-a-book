import { Application } from 'https://deno.land/x/oak/mod.ts';

export const handleUncaughtErrors = (app: Application) => {
  app.addEventListener('error', (event) => {
    console.log(event);
  });
  return app;
};
