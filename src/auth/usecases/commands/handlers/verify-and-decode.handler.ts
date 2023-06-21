import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { JWT_SERVICE } from '../../../infrastructure';
import { JwtInterface } from '../../../infrastructure/interfaces/jwt.interface';
import { VerifyAndDecodeCommand as Command } from '../implementation/';

@CommandHandler(Command)
export class VerifyAndDecodeHandler implements ICommandHandler<Command> {
  constructor(@Inject(JWT_SERVICE) private readonly jwt: JwtInterface) {}
  async execute({ token }: Command): Promise<any> {
    return this.jwt.verify(token);
  }
}
