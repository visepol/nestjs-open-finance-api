import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, 
    new DocumentBuilder()
    .setTitle('Open Finance API')
    .setDescription('Documentação da API')
    .setVersion('1.0')
    .build()
  ));

  await app.listen(3000);

  const upTime = new Date();
  env.UP_TIME = upTime.toString();
}

bootstrap();
