import { applyDecorators, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { NewsDto } from '../usecases/dto';

export const CreateDecorator = () =>
  applyDecorators(
    Post('/'),
    ApiOperation({
      summary: 'API для создания новости',
    }),
    ApiResponse({ status: 200, type: NewsDto }),
  );
