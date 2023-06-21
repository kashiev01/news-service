import { HttpException, Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  HASHER_SERVICE,
  HasherInterface,
  JWT_SERVICE,
  USER_SERVICE,
  UserServiceAwareInterface,
} from '../../../infrastructure';
import { JwtInterface } from '../../../infrastructure/interfaces/jwt.interface';
import { LoginCommand as Command } from '../implementation/';

@CommandHandler(Command)
export class LoginHandler implements ICommandHandler<Command> {
  constructor(
    @Inject(USER_SERVICE) private readonly users: UserServiceAwareInterface,
    @Inject(HASHER_SERVICE) private readonly hasher: HasherInterface,
    @Inject(JWT_SERVICE) private readonly jwt: JwtInterface,
  ) {}
  async execute({ login, password }: Command): Promise<string> {
    const user = await this.users.findOne(login);
    if (!user) throw new HttpException('User not found', 404);

    const isValid = await this.hasher.compare(password, user.password);
    if (!isValid) throw new HttpException('Incorrect login or password', 403);

    return await this.jwt.sign({ id: user.id, name: user.name });
  }
}
