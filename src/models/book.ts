import { Model, DataTypes, Relationships } from 'https://deno.land/x/denodb/mod.ts';
import { Author } from './author.ts';

export class Book extends Model {
  static table = 'authors';
  static timestamps = true;
  static fields = {
    authorId: Relationships.belongsTo(Author),
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.string(100),
  };
  /**
   * Get book's author
   */
  static author() {
    return this.hasOne(Author);
  }
}
