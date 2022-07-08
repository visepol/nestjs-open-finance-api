import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MonitorsController } from './monitors/monitors.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [MonitorsController],
  providers: [],
})
export class AppModule {}
