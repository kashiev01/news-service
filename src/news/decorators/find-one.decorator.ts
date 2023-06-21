import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsDto } from '../usecases/dto';

export const FindOneDecorator = () =>
  applyDecorators(
    Get('/:id'),
    ApiOperation({
      summary: 'API для получения новости по id',
    }),
    ApiResponse({ status: 200, type: NewsDto }),
  );
