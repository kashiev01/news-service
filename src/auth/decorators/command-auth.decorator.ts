import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const CommandAuthDecorator = () =>
  applyDecorators(ApiTags('Auth'), Controller('auth'));
