import { AggregateRoot } from '@nestjs/cqrs';
import { NewsInterface, UserAwareInterface as IUser } from 'src/common';

export class User extends AggregateRoot implements IUser {
  id: number;
  login: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  news: NewsInterface[];

  constructor(login: string) {
    super();
    this.login = login;
  }

  register(password: string, name: string, date: Date) {
    this.name = name;
    this.password = password;
    this.createdAt = date;
    this.updatedAt = date;
  }
}
