import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto, UpdateSessionDto} from '../dto';
import { SessionEntity } from '../entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {constructor(
  @InjectRepository(SessionEntity) private readonly sessionRepository: Repository<SessionEntity>,
) {}

async create(createSessionDto: CreateSessionDto): Promise<SessionEntity> {
  try {
    const session = this.sessionRepository.create(createSessionDto);
    return await this.sessionRepository.save(session);
  } catch (error) {
    throw new ConflictException(`Session creation failed: ${error.message}`);
  }
}

async findAll(): Promise<SessionEntity[]> {
  try {
    return await this.sessionRepository.find();
  } catch (error) {
    throw new Error(`Error fetching sessions: ${error.message}`);
  }
}

async findOne(session_id: number): Promise<SessionEntity> {
  const session = await this.sessionRepository.findOne({ where: { session_id } });

  if (!session) {
    throw new NotFoundException('Session not found. Try again.');
  }

  return session;
}

async update(session_id: number, updateSessionDto: CreateSessionDto): Promise<SessionEntity> {
  const session = await this.sessionRepository.preload({
    session_id,
    ...updateSessionDto,
  });

  if (!session) {
    throw new NotFoundException('Session not found. Try again.');
  }

  try {
    return await this.sessionRepository.save(session);
  } catch (error) {
    throw new ConflictException(`Session update failed: ${error.message}`);
  }
}

async remove(session_id: number): Promise<void> {
  const session = await this.sessionRepository.findOne({ where: { session_id } });

  if (!session) {
    throw new NotFoundException('Session not found. Try again.');
  }

  try {
    await this.sessionRepository.remove(session);
  } catch (error) {
    throw new Error(`Error deleting session: ${error.message}`);
  }
}
}
