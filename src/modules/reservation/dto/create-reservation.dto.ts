import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReservationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;
    
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    user_id: number; 
  
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    workspace_id: number;
  
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    session_id: number;
}