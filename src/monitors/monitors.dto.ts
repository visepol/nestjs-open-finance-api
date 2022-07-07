import { IsString, IsNumber } from 'class-validator';

export class MonitorsHealthDTO {
    @IsString()
    app_name: string;

    @IsNumber()
    pid: number;

    @IsString()
    up_time: string;
}
