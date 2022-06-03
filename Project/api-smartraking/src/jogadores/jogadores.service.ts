import { Injectable } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';

@Injectable()
export class JogadoresService {

    criarAtualizarJogador(body: CreateJogadorDto) {

        return {
            ...body,
            _id: Math.random(),
        }
    }

}
