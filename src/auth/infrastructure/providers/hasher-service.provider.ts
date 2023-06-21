import { Provider } from '@nestjs/common';

import { HASHER_SERVICE } from '../constants';
import { HasherService } from '../implementation';

export const HasherServiceProvider: Provider = {
  provide: HASHER_SERVICE,
  useClass: HasherService,
};
