import { Router } from 'https://deno.land/x/oak/mod.ts';

const infoRouter = new Router();

infoRouter.get('/', (context) => {
  context.response.body = 'PeekABook2 API';
});

export default infoRouter;
