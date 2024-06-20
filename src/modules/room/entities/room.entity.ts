import { WorkspaceEntity } from "src/modules/workspace/entities/workspace.entity";
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

  @OneToMany(() => WorkspaceEntity, (workspace) => workspace.room)
  workspaces: WorkspaceEntity[];
}
