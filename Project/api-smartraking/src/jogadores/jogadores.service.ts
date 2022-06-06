import { Injectable } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogadores.interface';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class JogadoresService {

    private jogadores: JogadorInterface[] = []

    createJogador(createJogador: CreateJogadorDto): string {

       this.create(createJogador);

       return 'Jogador criado com sucesso!'
    }

   async listPlayers(): Promise<JogadorInterface[]>{

        return this.jogadores;
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

}
