import { IsDateString, IsNotEmpty, IsString } from "class-validator";
import { DesafioStatus } from "../enums/desafio-status.enum";

export class UpdateDesafioDto {

    @IsNotEmpty()
    @IsDateString()
    dataHoraDesafio: Date;

    @IsNotEmpty()
    @IsString()
    status: DesafioStatus

}