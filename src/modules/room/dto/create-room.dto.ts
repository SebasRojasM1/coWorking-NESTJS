import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateRoomDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name_room: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    num_rows: number;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    num_columns: number;
}
