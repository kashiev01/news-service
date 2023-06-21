import { NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { NewsRepository as Repository } from '../../../repository';
import { DeleteNewsCommand as Command } from '../implementation';

@CommandHandler(Command)
export class DeleteNewsHandler implements ICommandHandler<Command> {
  constructor(private readonly repository: Repository) {}

  async execute({ id }: Command): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) throw new NotFoundException();
  }
}
