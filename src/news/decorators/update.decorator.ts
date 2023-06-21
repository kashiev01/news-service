import { applyDecorators, Put, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsInterceptor } from '../frameworks/interceptors/news.interceptor';
import { NewsDto } from '../usecases/dto';

export const UpdateDecorator = () =>
  applyDecorators(
    Put('/:id'),
    ApiOperation({
      summary: 'API для обновления новости',
    }),
    ApiResponse({ status: 200, type: NewsDto }),
    UseInterceptors(NewsInterceptor),
  );
