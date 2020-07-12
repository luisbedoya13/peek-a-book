import { Application } from 'https://deno.land/x/oak/mod.ts';
import { ApplicationPipeStep } from '../types/misc.ts';

export const ApplicationPipe = (app: Application, steps: ApplicationPipeStep[]) => {
  for (const step of steps) {
    step.process(app);
  }
};
