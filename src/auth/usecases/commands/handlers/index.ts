import { Provider } from '@nestjs/common';

import { LoginHandler } from './login.handler';
import { RegisterHandler } from './register.handler';
import { VerifyAndDecodeHandler } from './verify-and-decode.handler';

export const Commands: Provider[] = [
  RegisterHandler,
  LoginHandler,
  VerifyAndDecodeHandler,
];
