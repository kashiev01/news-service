import { AggregateRoot } from '@nestjs/cqrs';

import { NewsInterface } from './news.interface';

export interface UserAwareInterface extends AggregateRoot {
  id: number;
  login: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  news: NewsInterface[];

  register(password: string, name: string, date: Date);
}
