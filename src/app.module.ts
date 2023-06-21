import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { AuthModule } from './auth/auth.module';
import { ConfigurationModule, ConfigurationService as Config } from './config';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    NewsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [Config],
      useFactory: ({ database }: Config) => database,
      dataSourceFactory: async (options) => {
        return new DataSource(options).initialize();
      },
    }),
  ],
})
export class AppModule {}
