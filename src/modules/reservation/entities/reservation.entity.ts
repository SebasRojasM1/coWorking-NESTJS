import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { WorkspaceEntity } from '../../workspace/entities/workspace.entity';
import { SessionEntity } from '../../session/entities/session.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity("reservations")
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  reservation_id: number;

  @Column({default: "Accepted"})
  status: string;

  @CreateDateColumn()
  reservation_date: Date;

  @ManyToOne(() => UserEntity, (user) => user.reservations)
  user: UserEntity;

  @ManyToOne(() => WorkspaceEntity, (workspace) => workspace.reservations)
  workspace: WorkspaceEntity;

  @ManyToOne(() => SessionEntity, (session) => session.reservations)
  session: SessionEntity;
}