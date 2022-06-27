import * as mongoose from "mongoose";

export const JogadorSchema = new mongoose.Schema({
    phone: { type: String, unique: true},
    email: {type: String, unique: true},
    name: String,
    ranking: String,
    positionRanking: Number,
    urlPhotoJogador: String,
}, {timestamps: true, collection: "jogadores"})