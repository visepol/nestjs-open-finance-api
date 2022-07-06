import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const upTime = new Date();
  env.UP_TIME = upTime.toString();
}

bootstrap();
