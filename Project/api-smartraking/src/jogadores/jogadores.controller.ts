import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadorInterface } from './interfaces/jogadores.interface';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create')
    async criarAtualizarJogador(@Body() body:CreateJogadorDto){
        
        return this.jogadoresService.createJogador(body);
    }

    @Get('list-players')
    async listPlayers(): Promise<JogadorInterface[]>{

        return this.jogadoresService.listPlayers()
    }
}
