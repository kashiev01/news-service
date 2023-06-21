import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import {
  LoginCommand,
  RegisterCommand,
  VerifyAndDecodeCommand,
} from './usecases/commands/implementation';
import { RegistrationDto } from './usecases/dto';
import { LoginDto } from './usecases/dto/login.dto';

@Injectable()
export class AuthInteractor {
  constructor(private readonly commandBus: CommandBus) {}

  register = async ({
    login,
    password,
    name,
  }: RegistrationDto): Promise<void> =>
    await this.commandBus.execute<RegisterCommand, void>(
      new RegisterCommand(login, password, name),
    );

  login = async ({ login, password }: LoginDto): Promise<string> =>
    await this.commandBus.execute<LoginCommand, string>(
      new LoginCommand(login, password),
    );

  verifyAndDecode = async (token: string) =>
    await this.commandBus.execute(new VerifyAndDecodeCommand(token));
}
