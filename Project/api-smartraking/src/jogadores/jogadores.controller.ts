import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { EmailJogadorDto } from './dtos/emailJogador.dto';
import { JogadorInterface } from './interfaces/jogadores.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create-jogador')
    async criarAtualizarJogador(@Body() jogador:CreateJogadorDto){
        
        return this.jogadoresService.createJogador(jogador);
    }

    @Post('atualizar-jogador')
    async atualizarJogador(@Body() jogador:CreateJogadorDto): Promise<string>{

        return  this.jogadoresService.updatingJogador(jogador);
    }

    @Get('list-jogadores')
    async listJogadores(): Promise<JogadorInterface[]>{

        return this.jogadoresService.listJogadores();
    }

    @Get('list-jogador')
    async listJogador(@Body() body:EmailJogadorDto): Promise<JogadorInterface>{

        return this.jogadoresService.listJogadorByEmail(body.email);
    }

    @Delete('delete-jogador')
    async deleteJogador(@Body() body:EmailJogadorDto): Promise<string>{

        return this.jogadoresService.deleteJogador(body.email);
    }
}
