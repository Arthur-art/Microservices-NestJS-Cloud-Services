import { Controller, Get } from '@nestjs/common';

@Controller('api/v1/jogadores')
export class JogadoresController {

    @Get('listar')
    async criarAtualizarJogador(){
        return ({
            "name": "Cristiano Ronaldo",
        })
    }
}
