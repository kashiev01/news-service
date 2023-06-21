import { HttpException, Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  HASHER_SERVICE,
  HasherInterface,
  USER_SERVICE,
  UserServiceAwareInterface,
} from '../../../infrastructure';
import { RegisterCommand as Command } from '../implementation/register.command';

@CommandHandler(Command)
export class RegisterHandler implements ICommandHandler<Command> {
  constructor(
    @Inject(USER_SERVICE) private readonly users: UserServiceAwareInterface,
    @Inject(HASHER_SERVICE) private readonly hasher: HasherInterface,
  ) {}
  async execute({ login, password, name }: Command): Promise<void> {
    const isExist = await this.users.findOne(login);
    if (isExist) throw new HttpException('User already exists', 400);

    const hashedPassword = await this.hasher.hash(password);
    const user = this.users.create(login);
    const now = new Date();
    user.register(hashedPassword, name, now);
    await this.users.save(user);
  }
}
