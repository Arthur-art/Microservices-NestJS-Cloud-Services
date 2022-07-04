import { Body, Controller, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { CategoriaInterface } from './interfaces/categoria.interface';

@Controller('api/v1/categorias')
export class CategoriasController {

    constructor(private readonly categoriaService: CategoriasService){}

    @Post('create-categoria')
    async createCategoria(@Body() categoria: CreateCategoriaDto): Promise<void>{

        return await this.categoriaService.createCategoria(categoria);
    }

}
