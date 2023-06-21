import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { AuthInteractor } from '../../../auth/auth.interactor';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthInteractor) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let token = request.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    if (!token) return false;
    const jwt = await this.auth.verifyAndDecode(token);
    request['body'].creator = jwt['id'];
    return true;
  }
}
