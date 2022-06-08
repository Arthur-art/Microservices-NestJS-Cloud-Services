import { Injectable } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogadores.interface';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class JogadoresService {

    private jogadores: JogadorInterface[] = []

   async createJogador(jogador: CreateJogadorDto): Promise<string> {

       this.create(jogador);

       return 'Jogador criado com sucesso!'
    }

    async updatingJogador(jogador: CreateJogadorDto): Promise<JogadorInterface | string>{
        const { email } = jogador;

        const jogadorEncontrado = this.jogadores.find((value)=>{

            return value.email === email;
        })

        if(jogadorEncontrado){
          return this.atualizar(jogadorEncontrado, jogador)
        }

        return "Jogador não encontrado."
    }

   async listJogadores(): Promise<JogadorInterface[]>{

        return this.jogadores;
    }

   async listJogadorByEmail(email:string):Promise<JogadorInterface | string>{
    const jogadorEncontrado = this.jogadores.find((value)=>{

        return value.email === email;
    })

    if(!jogadorEncontrado){
        "Jogador não encontrado"
    }
    return jogadorEncontrado;
   } 

    private create(createJogador: CreateJogadorDto): void {
        const { nome, telefone, email } = createJogador;

        const jogador: JogadorInterface = {
            _id: uuidv4(),
            email,
            nome,
            telefone,
            posicaoRanking:1,
            ranking:"A",
            urlFotoJogador: "https://avatars.githubusercontent.com/u/54858003?v=4",
        };
        this.jogadores.push(jogador);

    }

    private atualizar(jogadorEncontrado: JogadorInterface, criarJogador:CreateJogadorDto){
        const { nome } = criarJogador;

        jogadorEncontrado.nome = nome;

        return jogadorEncontrado
    }

}
