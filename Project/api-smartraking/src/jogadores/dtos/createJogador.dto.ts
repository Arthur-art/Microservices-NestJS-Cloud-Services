import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class JogadorDto {
    
    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    urlPhotoJogador: string;
}