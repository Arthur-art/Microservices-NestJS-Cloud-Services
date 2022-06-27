import { Document } from "mongoose";
import { JogadorInterface } from "src/jogadores/interfaces/jogador.interface";

export interface CategoriaInterface extends Document {

    readonly categoria: string;
    descricao: string;
    eventos: Array<Evento>;
    jogadores: Array<JogadorInterface>
}

export interface Evento {
    nome: string;
    operacao: string;
    valor: number;
}