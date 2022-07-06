import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitorsController } from './monitors/monitors.controller';

@Module({
  imports: [],
  controllers: [AppController, MonitorsController],
  providers: [AppService],
})
export class AppModule {}
