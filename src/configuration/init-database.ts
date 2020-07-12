import { ApplicationFn } from '../types/misc.ts';
import { DBBuilder } from '../builders/db-builder.ts';
import { Author } from '../models/author.ts';
import { Book } from '../models/book.ts';

export const initDatabase: ApplicationFn = (_) => {
  DBBuilder.getInstance().setModels([Author, Book]);
};
