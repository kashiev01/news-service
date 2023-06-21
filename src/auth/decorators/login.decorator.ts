import { applyDecorators, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export const LoginDecorator = () =>
  applyDecorators(
    Post('login'),
    ApiOperation({
      summary: 'API для логина пользователя',
    }),
    ApiResponse({ status: 200, type: String }),
  );
