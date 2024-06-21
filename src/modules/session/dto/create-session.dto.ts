import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsDate, IsNumber, IsString } from "class-validator";

export class CreateSessionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    session_name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()    
    start_time: Date;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    end_time: Date;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    max_capacity: number;
}
