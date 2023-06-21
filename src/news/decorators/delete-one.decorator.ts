import { applyDecorators, Delete, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsInterceptor } from '../frameworks/interceptors/news.interceptor';

export const DeleteOneDecorator = () =>
  applyDecorators(
    Delete('/:id'),
    ApiOperation({
      summary: 'API для удаления новости по id',
    }),
    ApiResponse({ status: 200 }),
    UseInterceptors(NewsInterceptor),
  );
