import { Application } from 'https://deno.land/x/oak/mod.ts';

export type ApplicationFn = (app: Application) => void;
