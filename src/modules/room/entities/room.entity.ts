import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Room")
export class RoomEntity {
@PrimaryGeneratedColumn()
  room_id: number;

  @Column()
  name_room: string;

  @Column()
  num_rows: number;

  @Column()
  num_columns: number;

  @CreateDateColumn()
  created_at: Date;
}
