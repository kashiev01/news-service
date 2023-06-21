import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';

import { NewsRepository } from '../../repository';

@Injectable()
export class NewsInterceptor implements NestInterceptor {
  constructor(private readonly repository: NewsRepository) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const creator = request.body.creator;
    const newsId = request.params.id;
    const news = await this.repository.findOne({ where: { id: +newsId } });
    if (!news) throw new HttpException('', 404);

    if (creator !== news.creatorId) {
      throw new ForbiddenException();
    }

    return next.handle();
  }
}
