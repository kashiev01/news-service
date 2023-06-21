import { Provider } from '@nestjs/common';

import { JWT_SERVICE } from '../constants';
import { JwtService } from '../implementation/jwt.service';

export const JwtServiceProvider: Provider = {
  provide: JWT_SERVICE,
  useClass: JwtService,
};
