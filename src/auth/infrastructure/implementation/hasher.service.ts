import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { HasherInterface } from '../interfaces';

const SALT_ROUND = 10;
@Injectable()
export class HasherService implements HasherInterface {
  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUND);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
