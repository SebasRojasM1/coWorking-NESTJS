/* eslint-disable prettier/prettier */
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from '../dto';
import { ReservationEntity } from '../entities/reservation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkspaceEntity } from 'src/modules/workspace/entities/workspace.entity';
import { SessionEntity } from 'src/modules/session/entities/session.entity';


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

  /* 6 */
  async findAvailableWorkspaces(roomId: number, sessionId: number): Promise<WorkspaceEntity[]> {
    return this.reservationRepository.query(`
      SELECT w.*
      FROM workspaces w
      LEFT JOIN reservations r ON w.workspace_id = r.workspace_id
      WHERE w.room_id = $1 AND (r.session_id IS NULL OR r.status = 'cancelled' OR r.session_id != $2)
    `, [roomId, sessionId]);
  }

  async findOccupiedWorkspaces(roomId: number, sessionId: number): Promise<WorkspaceEntity[]> {
    return this.reservationRepository.query(`
      SELECT w.*
      FROM workspaces w
      INNER JOIN reservations r ON w.workspace_id = r.workspace_id
      WHERE w.room_id = $1 AND r.session_id = $2 AND r.status != 'cancelled'
    `, [roomId, sessionId]);
  }

  async findWorkspacesByUser(userId: number): Promise<WorkspaceEntity[]> {
    return this.reservationRepository.query(`
      SELECT w.*
      FROM workspaces w
      INNER JOIN reservations r ON w.workspace_id = r.workspace_id
      WHERE r.user_id = $1
    `, [userId]);
  }

  async findWorkspacesBySession(sessionId: number): Promise<WorkspaceEntity[]> {
    return this.reservationRepository.query(`
      SELECT w.*
      FROM workspaces w
      INNER JOIN reservations r ON w.workspace_id = r.workspace_id
      WHERE r.session_id = $1 AND r.status != 'cancelled'
    `, [sessionId]);
  }

  async findSessionsOrderedByReservations(order: 'desc' | 'asc'): Promise<SessionEntity[]> {
    return this.reservationRepository.query(`
      SELECT s.*, COUNT(r.reservation_id) as num_reservations
      FROM sessions s
      LEFT JOIN reservations r ON s.session_id = r.session_id
      GROUP BY s.session_id
      ORDER BY num_reservations ${order.toUpperCase()}
    `);
  }
}
