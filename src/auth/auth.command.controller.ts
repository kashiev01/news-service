import { Body } from '@nestjs/common';

import { AuthInteractor } from './auth.interactor';
import { LoginDecorator } from './decorators';
import { CommandAuthDecorator } from './decorators';
import { RegisterDecorator } from './decorators';
import { RegistrationDto } from './usecases/dto';
import { LoginDto } from './usecases/dto/login.dto';

@CommandAuthDecorator()
export class AuthCommandController {
  constructor(private readonly interactor: AuthInteractor) {}

  @RegisterDecorator()
  register(@Body() { login, password, name }: RegistrationDto): Promise<void> {
    return this.interactor.register({ login, password, name });
  }

  @LoginDecorator()
  login(@Body() { login, password }: LoginDto): Promise<string> {
    return this.interactor.login({ login, password });
  }
}
