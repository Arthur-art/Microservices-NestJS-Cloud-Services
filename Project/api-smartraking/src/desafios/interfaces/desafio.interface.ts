import { Document } from "mongoose"
import { JogadorInterface } from "src/jogadores/interfaces/jogador.interface";

export interface DesafiosInterface extends Document{

    dataHoraDesafio: string;
    status: string;
    dataHoraSolicitacao: string;
    dataHoraResposta: string;
    solicitante: string;
    categoria: string;
    jogadores: JogadorInterface[];
    partida: Partida[]
}

export interface Partida{
    def: string;
    resultado: Resultado[];
    jogadores: JogadorInterface[]
}

export interface Resultado{
    set: string;
}