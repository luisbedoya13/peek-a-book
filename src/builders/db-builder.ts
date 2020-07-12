import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { ModelSchema } from '../types/database.ts';
import { config } from '../utils/config.ts';

export class DBBuilder {
  private instance: Database;

  private constructor() {
    this.instance = new Database('sqlite3', { filepath: config.database });
  }

  public static getInstance() {
    return new DBBuilder();
  }

  public setModels(models: ModelSchema[]) {
    this.instance.link(models);
    this.instance.sync();
  }
}
