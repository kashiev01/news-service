import { NewsInterface as INews } from 'src/common';
import { EntitySchema } from 'typeorm';

import { News } from '../../news/entities';

export const NewsSchema = new EntitySchema<INews>({
  tableName: 'news',
  name: 'News',
  target: News,
  columns: {
    id: {
      name: 'id',
      type: 'int',
      primary: true,
      generated: 'increment',
    },
    title: {
      name: 'login',
      type: 'varchar',
    },
    body: {
      name: 'name',
      type: 'varchar',
    },
    creatorId: {
      name: 'user_id',
      type: 'integer',
    },
  },
  relations: {
    creator: {
      type: 'many-to-one',
      target: 'User',
      primary: true,
      joinColumn: {
        name: 'user_id',
      },
    },
  },
});
