import { Document } from "mongoose"
import { JogadorInterface } from "src/jogadores/interfaces/jogador.interface";

export interface DesafiosInterface extends Document{

    dataHoraDesafio: Date;
    status: string;
    dataHoraSolicitacao: Date;
    dataHoraResposta: Date;
    solicitante: JogadorInterface;
    categoria: string;
    jogadores: JogadorInterface[];
    partida: Partida[]
}

export interface Partida extends Document{
    categoria: string;
    jogadores: JogadorInterface[]
    resultado: Resultado[];
}

export interface Resultado{
    set: string;
}