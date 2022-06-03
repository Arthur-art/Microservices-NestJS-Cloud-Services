import { Body, Controller, Post } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
    
    constructor(private readonly jogadoresService:JogadoresService) { }

    @Post('create')
    async criarAtualizarJogador(@Body() body:CreateJogadorDto){
        
        return this.jogadoresService.criarAtualizarJogador(body);
    }
}
