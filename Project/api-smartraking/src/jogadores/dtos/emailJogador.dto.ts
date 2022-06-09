import { IsEmail } from "class-validator";

export class EmailJogadorDto{
    @IsEmail()
    email:string;
}