import { Middleware, send } from 'https://deno.land/x/oak/mod.ts';

export const staticFilesMiddleware: Middleware = async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/src/views`,
    index: 'welcome.html',
  });
};
