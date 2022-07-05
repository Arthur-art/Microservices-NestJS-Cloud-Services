import { Body, Controller, Post } from '@nestjs/common';
import { CreateDesafioDto } from './dtos/create-desafio.dto';

@Controller('api/v1/desafios')
export class DesafiosController {

    constructor(){}

    @Post('create-desafio')
    async createDesafio(@Body() createDesafio: CreateDesafioDto){


    }
}
