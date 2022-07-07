import { Controller, Get } from '@nestjs/common';
import { MonitorsHealthDTO } from './monitors.dto';

@Controller('monitors')
export class MonitorsController {
    @Get('health')
    health(): MonitorsHealthDTO {
        return {
            app_name: process.env.APP_NAME,
            pid: process.pid,
            up_time: process.env.UP_TIME
        }
      }
}
