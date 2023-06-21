import { applyDecorators, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export const RegisterDecorator = () =>
  applyDecorators(
    Post('register'),
    ApiOperation({
      summary: 'API для регистрации пользователя',
    }),
    ApiResponse({ status: 200 }),
  );
