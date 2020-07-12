import { Application } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationFn } from '../types/misc.ts';

export const initializationPipe = (app: Application, steps: ApplicationFn[]) => {
  for (const step of steps) {
    step(app);
  }
};
