import { Router, send } from 'https://deno.land/x/oak/mod.ts';

const infoRouter = new Router();

infoRouter.get('/', (context) => {
  context.response.body = 'Hello Deno';
});

export default infoRouter;
