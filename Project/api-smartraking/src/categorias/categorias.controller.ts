import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';

@Controller('api/v1/categorias')
export class CategoriasController {

    constructor(){}

    @Post('create-categoria')
    async createCategory(@Body() categoria: CreateCategoriaDto){

    }

}
