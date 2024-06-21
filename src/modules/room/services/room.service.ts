import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto, UpdateRoomDto } from '../dto';
import { RoomEntity } from '../entities/room.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity) private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  async create(createRoom: CreateRoomDto): Promise<RoomEntity> {
    try {
      const room = await this.roomRepository.save(createRoom);
      return room;
    } catch (error) {
      throw new ConflictException(`Room creation failed: ${error.message}`);
    }
  }

  async findAll(): Promise<RoomEntity[]> {
    try {
      return await this.roomRepository.find();
    } catch (error) {
      throw new Error(`Error fetching rooms: ${error.message}`);
    }
  }

  async findOne( room_id: number): Promise<RoomEntity> {
    const room = await this.roomRepository.findOne({ where: { room_id } });

    if (!room) {
      throw new NotFoundException('Room not found. Try again.');
    }

    return room;
  }

  async update(id: number, updateRoomDto: CreateRoomDto): Promise<RoomEntity> {
    const room = await this.roomRepository.preload({
      room_id: id,
      ...updateRoomDto,
    })

    if (!room) {
      throw new NotFoundException('Room not found. Try again.');
    }

    return await this.roomRepository.save(room);
  }


  async remove(room_id: number): Promise<void> {
    const room = await this.roomRepository.findOne({ where: { room_id } });

    if (!room) {
      throw new NotFoundException('Room not found. Try again.');
    }

    try {
      await this.roomRepository.remove(room);
    } catch (error) {
      throw new Error(`Error deleting room: ${error.message}`);
    }
  }
}
