import { ReservationEntity } from '../../reservation/entities/reservation.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity("sessions")
export class SessionEntity {
  @PrimaryGeneratedColumn()
  session_id: number;

  @Column({default: ""})
  session_name: string;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  max_capacity: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ReservationEntity, (reservation) => reservation.session)
  reservations: ReservationEntity[];
}