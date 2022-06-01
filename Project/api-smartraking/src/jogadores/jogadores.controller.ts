import { Body, Controller, Post } from '@nestjs/common';
import { CreateJogadorDto } from './dtos/createJogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {

    @Post('create')
    async criarAtualizarJogador(@Body() body:CreateJogadorDto){
        
        return {
            ...body,
            _id: Math.random(),
        }
    }
}
