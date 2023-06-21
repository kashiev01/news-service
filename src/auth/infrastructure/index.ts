import { Provider } from '@nestjs/common';

import { UserServiceProvider } from './providers';
import { HasherServiceProvider } from './providers';
import { JwtServiceProvider } from './providers/jwt-service.provider';

export * from './constants';
export * from './interfaces';

export const Infrastructure: Provider[] = [
  UserServiceProvider,
  HasherServiceProvider,
  JwtServiceProvider,
];
