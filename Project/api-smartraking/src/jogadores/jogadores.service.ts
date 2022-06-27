import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogador.interface';
@Injectable()
export class JogadoresService {

    constructor(@InjectModel("Jogador") private readonly jogadorModel:Model<JogadorInterface>) {}

   async createJogador(jogador: JogadorDto): Promise<JogadorInterface> {

       const { email, phone } = jogador;

       const emailAlreadyExists = await this.jogadorModel.findOne({email}) 
       const phoneAlreadyExists = await this.jogadorModel.findOne({phone}) 

       if(!emailAlreadyExists && !phoneAlreadyExists){
        return await this.create(jogador)
       }else{
        this.throwNewError("Jogador já está cadastrado.")
       }

    }

    async updatingJogador(id: string, jogador: JogadorDto): Promise<JogadorInterface>{

        const jogadorEncontrado = await this.jogadorModel.findById(id).exec();

        if(jogadorEncontrado){
          return this.atualizar(id, jogador)
        }else{
            this.throwNewError("Jogador não encontrado.")
        }
    }

   async listJogadores(): Promise<JogadorInterface[]>{

        return await this.jogadorModel.find().exec();
    }

   async listJogadorById(id:string):Promise<JogadorInterface>{
    const jogadorEncontrado = await this.jogadorModel.findById(id).exec();

    if(!jogadorEncontrado){
        this.throwNewError("Jogador não encontrado.")
    }
    return jogadorEncontrado;
   } 

   async deleteJogador(id:string): Promise<string>{

    const jogadorEncontrado = await this.jogadorModel.findById(id).exec();

    if(jogadorEncontrado){
        await this.jogadorModel.findByIdAndDelete(id).exec();
        return `Jogador ${jogadorEncontrado.name} foi deletado.`
    }else{
        this.throwNewError("Jogador não encontrado.")
    }   
   }

    private async create(createJogador: JogadorDto): Promise<JogadorInterface> {

        const jogadorCriado = new this.jogadorModel(createJogador)

        return await jogadorCriado.save();

    }

    private async atualizar(id:string, jogador:JogadorDto):Promise<JogadorInterface>{

        return await this.jogadorModel.findByIdAndUpdate(id, {set: jogador}).exec()
    }

    private throwNewError(message:string): void{
        throw new NotFoundException(`${message}`);
    }

}
