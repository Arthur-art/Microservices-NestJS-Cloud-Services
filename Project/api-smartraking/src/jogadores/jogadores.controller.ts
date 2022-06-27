import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { JogadoresValidationPipe } from 'src/pipes/jogadores-validation.pipe';
import { JogadorDto } from './dtos/createJogador.dto';
import { EmailJogadorDto } from './dtos/emailJogador.dto';
import { JogadorInterface } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create-jogador')
    async criarAtualizarJogador(@Body() jogador:JogadorDto): Promise<JogadorInterface>{
        
        return this.jogadoresService.createJogador(jogador);
    }

    @Put('atualizar-jogador/:id')
    async atualizarJogador(@Param('id', JogadoresValidationPipe) id:string, @Body() jogador: JogadorDto): Promise<JogadorInterface>{

        return  this.jogadoresService.updatingJogador(id, jogador);
    }

    @Get('list-jogadores')
    async listJogadores(): Promise<JogadorInterface[]>{

        return this.jogadoresService.listJogadores();
    }

    @Get('list-jogador/:id')
    async listJogador(@Param('id', JogadoresValidationPipe) id:string): Promise<JogadorInterface>{

        return this.jogadoresService.listJogadorById(id);
    }

    @Delete('delete-jogador/:id')
    async deleteJogador(@Param('id', JogadoresValidationPipe) id:string): Promise<string>{

        return this.jogadoresService.deleteJogador(id);
    }
}
