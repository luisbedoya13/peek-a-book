import { Application } from 'https://deno.land/x/oak/mod.ts';

export interface ApplicationPipe {
  (app: Application, steps: ApplicationPipeStep[]): void;
}

export abstract class ApplicationPipeStep {
  abstract process(app: Application): void;
}
