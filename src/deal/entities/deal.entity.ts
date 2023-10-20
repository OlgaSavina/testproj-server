import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Deal {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    title:string

    @Column()
    price:number

    @Column()
    ticket:number

    @Column()
    yield:number

    @Column()
    daysLeft:number

    @Column()
    sold:number

    @Column()
    imageURL:string

}
