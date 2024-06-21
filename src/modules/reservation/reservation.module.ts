import { Module } from '@nestjs/common';
import { ReservationService } from './service/reservation.service';
import { ReservationController } from './controller/reservation.controller';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
