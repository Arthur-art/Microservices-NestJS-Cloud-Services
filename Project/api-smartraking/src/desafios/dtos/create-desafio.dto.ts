import { ArrayMaxSize, ArrayMinSize, IsArray, IsDateString, IsNotEmpty } from "class-validator";
import { JogadorInterface } from "src/jogadores/interfaces/jogador.interface";

export class CreateDesafioDto{

    @IsNotEmpty()
    @IsDateString()
    dataHoraDesafio: Date;

    @IsNotEmpty()
    solicitante: JogadorInterface;

    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    jogadores: JogadorInterface[];

}