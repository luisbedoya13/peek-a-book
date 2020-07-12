import { ApplicationPipeStep } from '../types/misc.ts';
import { DBBuilder } from '../builders/db-builder.ts';
import { ModelSchema } from '../types/database.ts';

export class InitDatabase extends ApplicationPipeStep {
  private models: ModelSchema[];

  constructor(models: ModelSchema[]) {
    super();
    this.models = models;
  }

  public process() {
    DBBuilder.getInstance().setModels(this.models);
  }
}
