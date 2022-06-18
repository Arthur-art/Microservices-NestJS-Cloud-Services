import { Document } from "mongoose";

export interface JogadorInterface extends Document  {
    readonly phone: string;
    readonly email: string;
    name: string;
    ranking: string;
    positionRanking: number;
    urlPhotoJogador: string;
}