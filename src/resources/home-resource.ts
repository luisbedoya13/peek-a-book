import { Drash } from 'https://deno.land/x/drash@v1.0.7/mod.ts';

export class HomeResource extends Drash.Http.Resource {
  static paths = ['/'];
  public GET() {
    this.response.body = { message: 'Hello World' };
    return this.response;
  }
}
