import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rd_managers')
export class Manager {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    f_name: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column('int')
    roleId: number;
}

// @Entity('rd_roles')
// export class Role {
//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;
// }
