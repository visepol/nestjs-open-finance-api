import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorsController } from './monitors/monitors.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, MonitorsController],
  providers: [AppService],
})
export class AppModule {}
