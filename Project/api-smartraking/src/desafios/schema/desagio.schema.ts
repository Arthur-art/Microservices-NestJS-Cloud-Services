import * as mongoose from 'mongoose'

export const DesafiosSchema = new mongoose.Schema({
    dataHoraDesafio: {type: String},
    status: {type: String},
    dataHoraSolicitacao: {type: String},
    dataHoraResposta: {type: String},
    solicitante: {type: String},
    categoria: {type: String, unique: true},
    jogadores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jogador"
    }],
    partida: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Partida"
    }]
}, {timestamps: true, collection: 'desafios'});