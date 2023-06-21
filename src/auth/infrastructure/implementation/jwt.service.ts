import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JwtInterface } from '../interfaces/jwt.interface';

const SECRET = 'mysecret';
const OPTIONS = { expiresIn: '1h' };

@Injectable()
export class JwtService implements JwtInterface {
  sign(payload: Record<string, any>): string {
    return jwt.sign(payload, SECRET, OPTIONS);
  }

  verify(token: string): Record<string, any> {
    return jwt.verify(token, SECRET);
  }
}
