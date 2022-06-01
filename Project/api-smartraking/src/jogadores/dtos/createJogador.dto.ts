import { IsNotEmpty, IsString } from "class-validator";

export class CreateJogadorDto {
    @IsString()
    telefone: string;
    email: string;
    @IsNotEmpty()
    nome: string;
}