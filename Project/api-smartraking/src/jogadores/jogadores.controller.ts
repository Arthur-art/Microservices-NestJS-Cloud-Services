import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogadores.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create')
    async criarAtualizarJogador(@Body() jogador:CreateJogadorDto){
        
        return this.jogadoresService.createJogador(jogador);
    }

    @Post('atualizar-player')
    async atualizarJogador(@Body() jogador:CreateJogadorDto): Promise<JogadorInterface | string>{

        return  this.jogadoresService.updatingJogador(jogador)
    }

    @Get('list-jogadores')
    async listJogadores(): Promise<JogadorInterface[]>{

        return this.jogadoresService.listJogadores()
    }
}
