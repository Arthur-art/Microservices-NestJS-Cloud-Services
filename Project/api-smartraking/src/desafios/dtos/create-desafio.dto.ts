import { IsNotEmpty, IsString } from "class-validator";

export class CreateDesafioDto{

    @IsNotEmpty()
    @IsString()
    dataHoraDesafio: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    dataHoraSolicitacao: string;

    @IsNotEmpty()
    @IsString()
    dataHoraResposta: string;

    @IsNotEmpty()
    @IsString()
    solicitante: string;

}