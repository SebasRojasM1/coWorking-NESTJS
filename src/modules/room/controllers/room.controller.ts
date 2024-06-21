import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import { CreateRoomDto } from '../dto/create-room.dto';
import { UpdateRoomDto } from '../dto/update-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post("/create")
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get("/all")
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateRoomDto: CreateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
