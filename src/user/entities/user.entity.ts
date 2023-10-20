import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//entity таблиця в базі даних
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

}
