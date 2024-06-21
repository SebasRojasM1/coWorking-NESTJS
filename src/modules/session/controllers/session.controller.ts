import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionService } from '../services/session.service';
import { CreateSessionDto, UpdateSessionDto } from '../dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Session")
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a session to the system.', description: 'Create a session to access the system.' })
  @ApiResponse({status: 201, description: 'Session created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the session is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the session.'})
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionService.create(createSessionDto);
  }

  @Get("all")
  @ApiOperation({ summary: 'Find all the sessions of the system.', description: 'View all session registered in the system.' })
  @ApiResponse({status: 200, description: 'All sessions were found successfully.'})
  @ApiResponse({status: 404, description: 'No sessions were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the session.'})
  findAll() {
    return this.sessionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the session by ID of the system.', description: 'View a specific session registered in the database.' })
  @ApiResponse({status: 200, description: 'Session found successfully.',})
  @ApiResponse({status: 404, description: 'Session with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the session.'})
  findOne(@Param('id') id: string) {
    return this.sessionService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a session to the system.', description: 'Update a specific session registered in the database.' })
  @ApiResponse({status: 200, description: 'Session updated successfully.'})
  @ApiResponse({status: 404, description: 'Session with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while updating the session.'})
  update(@Param('id') id: string, @Body() updateSessionDto: CreateSessionDto) {
    return this.sessionService.update(+id, updateSessionDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a session to the system.', description: 'Delete a session of the system.' })
  @ApiResponse({status: 200, description: 'Session deleted successfully.'})
  @ApiResponse({status: 404, description: 'Session with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the session.'})
  remove(@Param('id') id: string) {
    return this.sessionService.remove(+id);
  }
}
