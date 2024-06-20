import { ReservationEntity } from "../../reservation/entities/reservation.entity";
import { RoomEntity } from "../../room/entities/room.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => ReservationEntity, (reservation) => reservation.workspace)
    reservations: ReservationEntity[];
}
