import { applyDecorators, Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { AuthGuard } from '../frameworks/guards/auth-guard.service';

export const CommandNewsDecorator = () =>
  applyDecorators(
    ApiTags('News'),
    Controller('news'),
    ApiBearerAuth(),
    UseGuards(AuthGuard),
  );
