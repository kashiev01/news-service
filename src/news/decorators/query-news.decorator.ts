import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const QueryNewsDecorator = () =>
  applyDecorators(ApiTags('News'), Controller('news'));
