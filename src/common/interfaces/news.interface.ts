import { AggregateRoot } from '@nestjs/cqrs';

import { UserAwareInterface } from './user.interface';

export interface NewsInterface extends AggregateRoot {
  id: number;
  title: string;
  body: string;
  creator: UserAwareInterface;
  creatorId: number;

  update(title: string, body: string);
}
