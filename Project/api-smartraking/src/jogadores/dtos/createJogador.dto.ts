import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateJogadorDto {
    @IsString()
    telefone: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    nome: string;
}