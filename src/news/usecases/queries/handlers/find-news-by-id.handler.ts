import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { NewsRepository as Repository } from '../../../repository';
import { NewsDto } from '../../dto';
import { NewsMapper } from '../../mappers';
import { FindNewsByIdQuery as Query } from '../implementation';

@QueryHandler(Query)
export class FindNewsByIdHandler implements IQueryHandler<Query> {
  constructor(private readonly repository: Repository) {}
  async execute({ id }: Query): Promise<NewsDto> {
    const data = await this.repository.findOne({ where: { id } });
    if (!data) throw new NotFoundException();
    return NewsMapper.toDTO(data);
  }
}
