import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { User } from '../../../../user/entities';
import { News } from '../../../entities';
import { NewsRepository as Repository } from '../../../repository';
import { NewsDto } from '../../dto';
import { NewsMapper } from '../../mappers';
import { CreateNewsCommand as Command } from '../implementation';

@CommandHandler(Command)
export class CreateNewsHandler implements ICommandHandler<Command> {
  constructor(private readonly repository: Repository) {}

  async execute({ title, body, creator }: Command): Promise<NewsDto> {
    const news = new News(title, body, { id: creator } as User);
    const createdNews = await this.repository.save(news);
    return NewsMapper.toDTO(createdNews);
  }
}
