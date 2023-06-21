import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  CreateNewsCommand,
  DeleteNewsCommand,
  UpdateNewsCommand,
} from './usecases/commands/implementation';
import { NewsDto, NewsListDto } from './usecases/dto';
import {
  FindNewsByCreatorQuery,
  FindNewsByIdQuery,
} from './usecases/queries/implementation';
import { FindNewsQuery } from './usecases/queries/implementation';

@Injectable()
export class NewsInteractor {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  create = async (
    title: string,
    body: string,
    creatorId: number,
  ): Promise<NewsDto> =>
    await this.commandBus.execute<CreateNewsCommand, NewsDto>(
      new CreateNewsCommand(title, body, creatorId),
    );

  update = async (id: number, title: string, body: string): Promise<NewsDto> =>
    await this.commandBus.execute(new UpdateNewsCommand(id, title, body));
  delete = async (id: number): Promise<void> =>
    await this.commandBus.execute(new DeleteNewsCommand(id));

  find = async (skip: number, take: number): Promise<NewsListDto> =>
    await this.queryBus.execute<FindNewsQuery, NewsListDto>(
      new FindNewsQuery(skip, take),
    );

  findOne = async (id: number): Promise<NewsDto> =>
    await this.queryBus.execute<FindNewsByIdQuery, NewsDto>(
      new FindNewsByIdQuery(id),
    );

  findByCreator = async (creatorId: number): Promise<NewsDto[]> =>
    await this.queryBus.execute<FindNewsByCreatorQuery, NewsDto[]>(
      new FindNewsByCreatorQuery(creatorId),
    );
}
