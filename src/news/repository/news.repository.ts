import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import {
  DeleteResult,
  EntityManager,
  FindManyOptions,
  FindOneOptions,
} from 'typeorm';

import { News } from '../entities';

@Injectable()
export class NewsRepository {
  constructor(
    @InjectEntityManager()
    private em: EntityManager,
  ) {}
  save(news: News): Promise<News> {
    return this.em.save(news);
  }

  findOne(options: FindOneOptions<News>): Promise<News> {
    return this.em.findOne(News, options);
  }
  find(options: FindManyOptions<News>): Promise<News[]> {
    return this.em.find(News, options);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.em.delete(News, id);
  }
}
