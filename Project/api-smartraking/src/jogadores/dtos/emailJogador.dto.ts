import { IsEmail, IsNotEmpty } from "class-validator";

export class EmailJogadorDto{
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
}