import { ArrayMaxSize, ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsString } from "class-validator";
import { JogadorInterface } from "src/jogadores/interfaces/jogador.interface";
import { DesafioStatus } from "../enums/desafio-status.enum";

export class CreateDesafioDto{

    @IsNotEmpty()
    @IsDateString()
    dataHoraDesafio: Date;

    @IsNotEmpty()
    @IsString()
    status: DesafioStatus;

    @IsNotEmpty()
    solicitante: string;

    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    jogadores: JogadorInterface[];

}