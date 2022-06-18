import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogador.interface';
@Injectable()
export class JogadoresService {

    private jogadores: JogadorInterface[] = [];

    constructor(@InjectModel("Jogador") private readonly jogadorModel:Model<JogadorInterface>) {}

   async createJogador(jogador: CreateJogadorDto): Promise<string> {

       this.create(jogador);

       return 'Jogador criado com sucesso!'
    }

    async updatingJogador(jogador: CreateJogadorDto): Promise<string>{
        const { email } = jogador;

        const jogadorEncontrado = await this.jogadorModel.findOne({email}).exec();

        if(jogadorEncontrado){
          return this.atualizar(jogadorEncontrado, jogador)
        }else{
            throw new NotFoundException("Jogador não encontrado.")
        }
    }

   async listJogadores(): Promise<JogadorInterface[]>{

        return this.jogadores;
    }

   async listJogadorByEmail(email:string):Promise<JogadorInterface>{
    const jogadorEncontrado = this.jogadores.find((value)=>{

        return value.email === email;
    })

    if(!jogadorEncontrado){
        throw new NotFoundException("Jogador não encontrado.")
    }
    return jogadorEncontrado;
   } 

   async deleteJogador(email:string): Promise<string>{
        const jogadorEncontrado = this.jogadores.find((value)=>{
            return value.email === email;
        });

        if(jogadorEncontrado){
            this.jogadores.splice(this.jogadores.indexOf(jogadorEncontrado), 1);
            return `Jogador ${jogadorEncontrado.name} deletado com sucesso!`;
        }else{
            throw new NotFoundException("Jogador não encontrado.");
        }
   }

    private create(createJogador: CreateJogadorDto): void {
        const { nome, telefone, email } = createJogador;

        const jogador: JogadorInterface = {
            email,
            name: nome,
            phone: telefone,
            positionRanking:1,
            ranking:"A",
            urlPhotoJogador: "https://avatars.githubusercontent.com/u/54858003?v=4",
        };
        this.jogadores.push(jogador);

    }

    private async atualizar(jogadorEncontrado: JogadorInterface, criarJogador:CreateJogadorDto):Promise<string>{
        const { nome } = criarJogador;

        jogadorEncontrado.name = nome;

        return "Nome do jogador alterado com sucesso!"
    }

}
