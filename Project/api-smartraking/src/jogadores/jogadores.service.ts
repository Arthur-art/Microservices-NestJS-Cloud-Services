import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogador.interface';
@Injectable()
export class JogadoresService {

    constructor(@InjectModel("Jogador") private readonly jogadorModel:Model<JogadorInterface>) {}

   async createJogador(jogador: CreateJogadorDto): Promise<string> {
    
       this.create(jogador);

       return 'Jogador criado com sucesso!'
    }

    async updatingJogador(jogador: CreateJogadorDto): Promise<JogadorInterface>{

        const { email } = jogador;

        const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();

        if(jogadorEncontrado){
          return this.atualizar(jogador)
        }else{
            this.throwNewError("Jogador não encontrado.")
        }
    }

   async listJogadores(): Promise<JogadorInterface[]>{

        return await this.jogadorModel.find().exec();
    }

   async listJogadorByEmail(email:string):Promise<JogadorInterface>{
    const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();

    if(!jogadorEncontrado){
        this.throwNewError("Jogador não encontrado.")
    }
    return jogadorEncontrado;
   } 

   async deleteJogador(email:string): Promise<JogadorInterface>{

    const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();

    if(jogadorEncontrado){
        return await this.jogadorModel.remove({email}).exec();
    }else{
        this.throwNewError("Jogador não encontrado.")
    }   
   }

    private async create(createJogador: CreateJogadorDto): Promise<JogadorInterface> {

        const jogadorCriado = new this.jogadorModel(createJogador)

        return await jogadorCriado.save();

    }

    private async atualizar(criarJogador:CreateJogadorDto):Promise<JogadorInterface>{

        const { email } = criarJogador;

        return await this.jogadorModel.findOneAndUpdate({email}, {set: criarJogador}).exec()
    }

    private throwNewError(message:string): void{
        throw new NotFoundException(`${message}`);
    }

}
