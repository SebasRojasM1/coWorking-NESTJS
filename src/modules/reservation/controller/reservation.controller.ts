import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationService } from '../service/reservation.service';
import { CreateReservationDto, UpdateReservationDto } from '../dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post("create")
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @Get("all")
  findAll() {
    return this.reservationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateReservationDto: CreateReservationDto) {
    return this.reservationService.update(+id, updateReservationDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.reservationService.remove(+id);
  }
}
