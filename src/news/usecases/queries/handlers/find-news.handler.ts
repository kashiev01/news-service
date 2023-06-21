import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { News } from '../../../entities';
import { NewsRepository as Repository } from '../../../repository';
import { NewsListDto } from '../../dto';
import { NewsMapper } from '../../mappers';
import { FindNewsQuery as Query } from '../implementation';

@QueryHandler(Query)
export class FindNewsHandler implements IQueryHandler<Query, NewsListDto> {
  constructor(private readonly repository: Repository) {}
  execute = async ({ take, skip }: Query): Promise<NewsListDto> => {
    const data = await this.repository
      .find({ take, skip })
      .then((newsList: News[]) =>
        newsList.map((news: News) => NewsMapper.toDTO(news)),
      );
    return { take, skip, data };
  };
}
