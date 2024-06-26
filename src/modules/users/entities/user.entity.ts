import { ReservationEntity } from '../../reservation/entities/reservation.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({default: ""})
  name: string;

  @Column({default: ""})
  lastname: string;

  @Column({default: ""})
  email: string;

  @Column({default: ""})
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ReservationEntity, (reservation) => reservation.user)
  reservations: ReservationEntity[];
}