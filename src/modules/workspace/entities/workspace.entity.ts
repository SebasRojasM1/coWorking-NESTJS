import { RoomEntity } from "src/modules/room/entities/room.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Workspace")
export class WorkspaceEntity {
    @PrimaryGeneratedColumn()
    workspace_id: number;

    @Column()
    n_row: number;

    @Column()
    n_column: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => RoomEntity, (room) => room.workspaces)
    room: RoomEntity;
}
