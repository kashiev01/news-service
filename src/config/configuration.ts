import { registerAs } from '@nestjs/config';
import * as process from 'process';

import { dbConfig } from './db';

export default registerAs('config', () => ({
  env: process.env.ENV,
  app: {
    http: { port: +process.env.HTTP_PORT },
    microservice: {
      host: process.env.HOST,
      port: +process.env.PORT,
    },
  },
  ...dbConfig(),
}));
