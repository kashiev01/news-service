import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigurationModule } from '../config';
import { UserSchema } from '../data-access/pg';
import { UserRepository } from './repository';
import { UserService } from './user.service';

@Module({
  imports: [ConfigurationModule, TypeOrmModule.forFeature([UserSchema])],
  providers: [UserService, UserRepository],
  exports: [UserService, TypeOrmModule, UserRepository],
})
export class UserModule {}
