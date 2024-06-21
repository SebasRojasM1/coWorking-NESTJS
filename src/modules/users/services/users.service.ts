import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userExists = await this.userRepository.findOne({ where: { email: createUserDto.email } });

    if (userExists) {
      throw new ConflictException('Email already in use. Try again.');
    }

    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { user_id: id } });

    if (!user) {
      throw new NotFoundException('User not found. Try Again.');
    }

    return user;
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.preload({
      user_id: id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException('User not found. Try again.');
    }

    return this.userRepository.save(user);
  }

  async remove(user_id: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { user_id } });

    if (!user) {
      throw new NotFoundException('User not found. Try again.');
    }

    await this.userRepository.remove(user);
  }
}
