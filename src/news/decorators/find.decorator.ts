import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsListDto } from '../usecases/dto';

export const FindDecorator = () =>
  applyDecorators(
    Get('/'),
    ApiOperation({
      summary: 'API для получения новостей',
    }),
    ApiResponse({ status: 200, type: NewsListDto }),
  );
