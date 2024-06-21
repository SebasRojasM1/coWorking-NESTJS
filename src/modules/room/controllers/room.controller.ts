import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import { CreateRoomDto, UpdateRoomDto } from '../dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Room")
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a room to the system.', description: 'Create a room to access the system.' })
  @ApiResponse({status: 201, description: 'Room created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the room is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the room.'})
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Find all the room of the system.', description: 'View all room registered in the system.' })
  @ApiResponse({status: 200, description: 'All room were found successfully.'})
  @ApiResponse({status: 404, description: 'No room were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the room.'})
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the room by ID of the system.', description: 'View a specific room registered in the database.' })
  @ApiResponse({status: 200, description: 'Room found successfully.',})
  @ApiResponse({status: 404, description: 'Room with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the room.'})
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a room to the system.', description: 'Update a specific room registered in the database.' })
  @ApiResponse({status: 200, description: 'Room updated successfully.'})
  @ApiResponse({status: 404, description: 'Room with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while updating the room.'})
  update(@Param('id') id: string, @Body() updateRoomDto: CreateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a room to the system.', description: 'Delete a room of the system.' })
  @ApiResponse({status: 200, description: 'Room deleted successfully.'})
  @ApiResponse({status: 404, description: 'Room with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the room.'})
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
