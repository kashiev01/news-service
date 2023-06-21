import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { News } from '../../../entities';
import { NewsRepository as Repository } from '../../../repository';
import { NewsDto } from '../../dto';
import { NewsMapper } from '../../mappers';
import { FindNewsByCreatorQuery as Query } from '../implementation';

@QueryHandler(Query)
export class FindNewsByCreatorHandler implements IQueryHandler<Query> {
  constructor(private readonly repository: Repository) {}
  async execute({ creator }: Query): Promise<NewsDto[]> {
    return await this.repository
      .find({ where: { creator: { id: creator } } })
      .then((newsList: News[]) =>
        newsList.map((news: News) => NewsMapper.toDTO(news)),
      );
  }
}
