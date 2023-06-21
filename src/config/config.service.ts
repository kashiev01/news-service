import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppOptions } from './app.options';

@Injectable()
export class ConfigurationService {
  constructor(private config: ConfigService) {}

  get app(): AppOptions {
    return this.config.get<AppOptions>('config.app');
  }

  get database(): TypeOrmModuleOptions {
    return this.config.get<TypeOrmModuleOptions>('config.db.pg');
  }
}
