import { Drash } from 'https://deno.land/x/drash@v1.0.7/mod.ts';

export class BookResource extends Drash.Http.Resource {
  static paths = ['/book/:id'];

  public GET() {
    const id = this.request.getPathParam('id');
    this.response.body = { id };
    return this.response;
  }
}
