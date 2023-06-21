import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { UserModule } from '../user/user.module';
import { AuthCommandController } from './auth.command.controller';
import { AuthInteractor } from './auth.interactor';
import { Infrastructure } from './infrastructure';
import { UseCases } from './usecases/commands';

@Module({
  imports: [CqrsModule, UserModule],
  controllers: [AuthCommandController],
  providers: [...UseCases, AuthInteractor, ...Infrastructure],
  exports: [AuthInteractor],
})
export class AuthModule {}
