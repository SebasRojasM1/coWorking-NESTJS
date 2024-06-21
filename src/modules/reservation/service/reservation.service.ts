import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto, UpdateReservationDto } from '../dto';
import { ReservationEntity } from '../entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(ReservationEntity) private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<ReservationEntity> {
    try {
      const reservation = this.reservationRepository.create(createReservationDto);
      return await this.reservationRepository.save(reservation);
    } catch (error) {
      throw new ConflictException(`Reservation creation failed: ${error.message}`);
    }
  }

  async findAll(): Promise<ReservationEntity[]> {
    try {
      return await this.reservationRepository.find();
    } catch (error) {
      throw new Error(`Error fetching reservations: ${error.message}`);
    }
  }

  async findOne(reservation_id: number): Promise<ReservationEntity> {
    const reservation = await this.reservationRepository.findOne({ where: { reservation_id } });

    if (!reservation) {
      throw new NotFoundException('Reservation not found. Try again.');
    }

    return reservation;
  }

  async update(reservation_id: number, updateReservationDto: CreateReservationDto): Promise<ReservationEntity> {
    const reservation = await this.reservationRepository.preload({
      reservation_id,
      ...updateReservationDto,
    });

    if (!reservation) {
      throw new NotFoundException('Reservation not found. Try again.');
    }

    try {
      return await this.reservationRepository.save(reservation);
    } catch (error) {
      throw new ConflictException(`Reservation update failed: ${error.message}`);
    }
  }

  async remove(reservation_id: number): Promise<void> {
    const reservation = await this.reservationRepository.findOne({ where: { reservation_id } });

    if (!reservation) {
      throw new NotFoundException('Reservation not found. Try again.');
    }

    try {
      await this.reservationRepository.remove(reservation);
    } catch (error) {
      throw new Error(`Error deleting reservation: ${error.message}`);
    }
  }
}
