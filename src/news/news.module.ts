import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { ConfigurationModule } from '../config';
import { NewsSchema } from '../data-access/pg/news.schema';
import { AuthGuard } from './frameworks/guards/auth-guard.service';
import { NewsCommandController } from './news.command.controller';
import { NewsInteractor } from './news.interactor';
import { NewsQueryController } from './news.query.controller';
import { NewsRepository } from './repository';
import { UseCases } from './usecases';

@Module({
  imports: [
    AuthModule,
    CqrsModule,
    ConfigurationModule,
    TypeOrmModule.forFeature([NewsSchema]),
  ],
  controllers: [NewsQueryController, NewsCommandController],
  providers: [...UseCases, NewsRepository, NewsInteractor, AuthGuard],
})
export class NewsModule {}
