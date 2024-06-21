import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './modules/users/entities/user.entity';
import { RoomEntity } from './modules/room/entities/room.entity';
import { SessionEntity } from './modules/session/entities/session.entity';
import { WorkspaceEntity } from './modules/workspace/entities/workspace.entity';
import { ReservationEntity } from './modules/reservation/entities/reservation.entity';
import { UsersController } from './modules/users/controllers/users.controller';
import { RoomController } from './modules/room/controllers/room.controller';
import { SessionController } from './modules/session/controllers/session.controller';
import { WorkspaceController } from './modules/workspace/controllers/workspace.controller';
import { ReservationController } from './modules/reservation/controller/reservation.controller';
import { UsersService } from './modules/users/services/users.service';
import { RoomService } from './modules/room/services/room.service';
import { SessionService } from './modules/session/services/session.service';
import { WorkspaceService } from './modules/workspace/services/workspace.service';
import { ReservationService } from './modules/reservation/service/reservation.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity, RoomEntity, SessionEntity, WorkspaceEntity, ReservationEntity],
      extra: {
        ssl: true,
      },
    }),
    TypeOrmModule.forFeature([UserEntity, RoomEntity, SessionEntity, WorkspaceEntity, ReservationEntity]), // Register your entities
  ],
  controllers: [UsersController, RoomController, SessionController, WorkspaceController, ReservationController],
  providers: [UsersService, RoomService, SessionService, WorkspaceService, ReservationService],
})
export class AppModule {}