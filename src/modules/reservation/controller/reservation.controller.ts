import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationService } from '../service/reservation.service';
import { CreateReservationDto, UpdateReservationDto } from '../dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Reservation")
@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post("/create")
  @ApiOperation({ summary: 'Create a reservation to the system.', description: 'Create a reservation to access the system.' })
  @ApiResponse({status: 201, description: 'Reservation created successfully.'})
  @ApiResponse({status: 400, description: 'The data entered to create the reservation is invalid.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while creating the reservation.'})
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @Get("/all")
  @ApiOperation({ summary: 'Find all the reservations of the system.', description: 'View all reservations registered in the system.' })
  @ApiResponse({status: 200, description: 'All Reservations were found successfully.'})
  @ApiResponse({status: 404, description: 'No Reservations were found in the system.'})
  @ApiResponse({status: 500,description: 'An internal server error occurred while searching for the reservations.'})
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find the reservations by ID of the system.', description: 'View a specific reservations registered in the database.' })
  @ApiResponse({status: 200, description: 'Reservations found successfully.',})
  @ApiResponse({status: 404, description: 'Reservations with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while searching for the reservations.'})
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Update a reservation to the system.', description: 'Update a specific reservation registered in the database.' })
  @ApiResponse({status: 200, description: 'Reservation updated successfully.'})
  @ApiResponse({status: 404, description: 'Reservation with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while updating the reservation.'})
  update(@Param('id') id: string, @Body() updateReservationDto: CreateReservationDto) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a reservation to the system.', description: 'Delete a reservation of the system.' })
  @ApiResponse({status: 200, description: 'Reservation deleted successfully.'})
  @ApiResponse({status: 404, description: 'Reservation with the entered ID not found.'})
  @ApiResponse({status: 500, description: 'An internal server error occurred while deleting the reservation.'})
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
