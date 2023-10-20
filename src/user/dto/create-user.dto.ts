import {IsEmail} from 'class-validator';

//типізація вхідних параметрів
export class CreateUserDto {
    @IsEmail()
    email:string

    
    password: string;
}
