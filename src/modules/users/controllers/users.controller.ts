import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a user to the system.', description: 'Create a user to access the system.' })
  @ApiResponse({status: 201, description: 'User created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the user is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the user.'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Find all the users of the system.', description: 'View all users registered in the system.' })
  @ApiResponse({status: 200, description: 'All users were found successfully.'})
  @ApiResponse({status: 404, description: 'No users were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the users.'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the user by ID of the system.', description: 'View a specific user registered in the database.' })
  @ApiResponse({status: 200, description: 'User found successfully.',})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the user.'})
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a user to the system.', description: 'Update a specific user registered in the database.' })
  @ApiResponse({status: 200, description: 'User updated successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while updating the user.'})
  update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a user to the system.', description: 'Delete a user of the system.' })
  @ApiResponse({status: 200, description: 'User deleted successfully.'})
  @ApiResponse({status: 404, description: 'User with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the user.'})
  remove(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
}
