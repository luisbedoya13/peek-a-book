import { Drash } from 'https://deno.land/x/drash@v1.0.7/mod.ts';
import { config } from './utils/config.ts';
import { HomeResource } from './resources/home-resource.ts';
import { BookResource } from './resources/book-resource.ts';

const server = new Drash.Http.Server({
  response_output: 'text/json',
  resources: [HomeResource, BookResource],
});

server.run({ ...config });

console.log(`Peek-a-book server running at http://${config.hostname}:${config.port}`);
