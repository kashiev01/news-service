import { AggregateRoot } from '@nestjs/cqrs';

import { NewsInterface as INews, UserAwareInterface } from '../../common';

export class News extends AggregateRoot implements INews {
  id: number;
  title: string;
  body: string;
  creator: UserAwareInterface;
  creatorId: number;
  constructor(title: string, body: string, creator: UserAwareInterface) {
    super();
    this.title = title;
    this.body = body;
    this.creator = creator;
  }

  update(title: string, body: string) {
    if (title) this.title = title;
    if (body) this.body = body;
  }
}
