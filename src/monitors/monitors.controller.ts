import { Controller, Get } from '@nestjs/common';

@Controller('monitors')
export class MonitorsController {
    @Get('health')
    health(): Object {
        return {
            app_name: process.env.APP_NAME,
            pid: process.pid,
            up_time: process.env.UP_TIME
        }
      }
}
