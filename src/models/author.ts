import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';

export class Author extends Model {
  static table = 'authors';
  static timestamps = true;
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.string(40),
  };
}
