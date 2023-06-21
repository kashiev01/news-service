import { HttpException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { NewsRepository as Repository } from '../../../repository';
import { NewsDto } from '../../dto';
import { UpdateNewsCommand as Command } from '../implementation';

@CommandHandler(Command)
export class UpdateNewsHandler implements ICommandHandler<Command> {
  constructor(private readonly repository: Repository) {}

  async execute({ id, title, body }: Command): Promise<NewsDto> {
    const news = await this.repository.findOne({ where: { id } });
    if (!news) throw new HttpException('News not found', 404);
    news.update(title, body);
    return this.repository.save(news);
  }
}
