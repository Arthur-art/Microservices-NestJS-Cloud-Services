import { Body, Controller, Post } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { CreateDesafioDto } from './dtos/create-desafio.dto';

@Controller('api/v1/desafios')
export class DesafiosController {

    constructor(private readonly desafioService: DesafiosService){}

    @Post('create-desafio')
    async createDesafio(@Body() createDesafio: CreateDesafioDto): Promise<void>{

        return this.desafioService.createDesafio(createDesafio);
    }
}
