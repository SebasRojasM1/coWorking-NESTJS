import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity("Session")
export class SessionEntity {
  @PrimaryGeneratedColumn()
  session_id: number;

  @Column()
  session_name: string;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  max_capacity: number;

  @CreateDateColumn()
  created_at: Date;
}