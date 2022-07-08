import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { CreateDesafioDto } from './dtos/create-desafio.dto';
import { UpdateDesafioDto } from './dtos/update-desafio.dto';
import { DesafiosInterface } from './interfaces/desafio.interface';

@Controller('api/v1/desafios')
export class DesafiosController {

    constructor(private readonly desafioService: DesafiosService){}

    @Post('create-desafio')
    async createDesafio(@Body() createDesafio: CreateDesafioDto): Promise<DesafiosInterface>{

        return await this.desafioService.createDesafio(createDesafio);
    }

    @Get('list-desafios')
    async listDesafios(): Promise<DesafiosInterface[]>{

        return await this.desafioService.listDesafios()
    }

    @Get('list-desafios-by-solicitante/:jogadorId')
    async listDesafiosBySolicitante(@Param('jogadorId') jogadorId:string): Promise<DesafiosInterface>{

        return await this.desafioService.listDesafiosBySolicitante(jogadorId)
    }

    @Put('update-desafio/:desafioId')
    async updateDesafio(@Param('desafioId') desafioId:string, @Body() updateDesafioDto: UpdateDesafioDto){

        return await this.desafioService.updateDesafio(desafioId, updateDesafioDto)
    }
}
