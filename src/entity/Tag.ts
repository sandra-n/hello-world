import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { User } from "./User";

@Entity({name: "tag"})
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 60})
    name: string;

    @ManyToMany(type => User, user => user.tags)//, {
    //   eager: true
    // })
    @JoinTable()
    users: User[];
}
