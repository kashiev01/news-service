import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigurationService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {
    app: { http },
  }: ConfigurationService = app.get<ConfigurationService>(ConfigurationService);
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidUnknownValues: false }),
  );

  const config = new DocumentBuilder()
    .setTitle('news service')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .addServer('/')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app
    .listen(http.port)
    .then(() => Logger.log(`Service started on http port ${http.port} ...`));
}
bootstrap();
