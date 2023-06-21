import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsDto } from '../usecases/dto';

export const FindByCreatorDecorator = () =>
  applyDecorators(
    Get('creator/:id'),
    ApiOperation({
      summary: 'API для получения новости по creatorId',
    }),
    ApiResponse({ status: 200, type: NewsDto }),
  );
