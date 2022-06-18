import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateJogadorDto {
    @IsString()
    phone: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    name: string;
}