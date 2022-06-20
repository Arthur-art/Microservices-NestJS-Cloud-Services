import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { JogadoresValidationPipe } from 'src/pipes/jogadores-validation.pipe';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { EmailJogadorDto } from './dtos/emailJogador.dto';
import { JogadorInterface } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create-jogador')
    async criarAtualizarJogador(@Body() jogador:CreateJogadorDto): Promise<JogadorInterface>{
        
        return this.jogadoresService.createJogador(jogador);
    }

    @Post('atualizar-jogador')
    async atualizarJogador(@Body() jogador:CreateJogadorDto): Promise<JogadorInterface>{

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
    async deleteJogador(@Query('email', JogadoresValidationPipe) email:string): Promise<string>{

        return this.jogadoresService.deleteJogador(email);
    }
}
