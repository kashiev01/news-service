import { UserAwareInterface as IUser } from 'src/common';
import { EntitySchema } from 'typeorm';

import { User } from '../../user/entities';

export const UserSchema = new EntitySchema<IUser>({
  tableName: 'users',
  name: 'User',
  target: User,
  columns: {
    id: {
      name: 'id',
      type: 'int',
      primary: true,
      generated: 'increment',
    },
    login: {
      name: 'login',
      type: 'varchar',
      length: 12,
      unique: true,
    },
    name: {
      name: 'name',
      type: 'varchar',
    },
    password: {
      name: 'password',
      type: 'varchar',
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamptz',
      nullable: true,
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamptz',
      nullable: true,
    },
  },
  relations: {
    news: {
      type: 'one-to-many',
      target: 'News',
      cascade: true,
      inverseSide: 'user',
    },
  },
});
