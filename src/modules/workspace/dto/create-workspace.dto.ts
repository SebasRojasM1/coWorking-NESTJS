import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateWorkspaceDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    n_row: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    n_column: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    room_id: number;
}
