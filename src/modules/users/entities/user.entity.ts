import { ReservationEntity } from '../../reservation/entities/reservation.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity("User")
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ReservationEntity, (reservation) => reservation.user)
  reservations: ReservationEntity[];
}