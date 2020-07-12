import { Middleware } from 'https://deno.land/x/oak/mod.ts';
import { Snelm } from 'https://deno.land/x/snelm/mod.ts';

const snelm = new Snelm('oak');

export const serverSecurityMiddleware: Middleware = (context, next) => {
  context.response = snelm.snelm(context.request, context.response);
  next();
};
