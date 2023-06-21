import { Provider } from '@nestjs/common';

import { UserService } from '../../../user';
import { USER_SERVICE } from '../constants';

export const UserServiceProvider: Provider = {
  provide: USER_SERVICE,
  useClass: UserService,
};
