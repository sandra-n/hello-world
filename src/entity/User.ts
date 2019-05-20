import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "user"})
export class User {

    @PrimaryGeneratedColumn() //serial
    id: number;

    @Column("varchar", {length: 60})
    name: string;

    @Column("varchar", {length: 60})
    email: string;

    @Column()
    cpf: string; //const

    @Column()
    birthDate: string;

    @Column()
    role: string;

    @Column("varchar", {length: 500})
    hash: string;

    @Column("varchar", {nullable: true,  length: 500})
    refreshToken: string;
}
