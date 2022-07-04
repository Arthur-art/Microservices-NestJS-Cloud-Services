import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
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

    @Get('list-categorias')
    async listCategorias(): Promise<CategoriaInterface[]>{

        return await this.categoriaService.listCategorias();
    }

    @Get('list-categoria-by-id/:id')
    async listCategoriaById(@Param('id', IdValidationPipe) id:string): Promise<CategoriaInterface>{

        return await this.categoriaService.listCategoriaById(id);
    }

    @Patch('atualizar-categoria/:id')
    async atualizarCategoriaById(@Param('id', IdValidationPipe) id:string, @Body() categoria: CreateCategoriaDto): Promise<CategoriaInterface>{
        return await this.categoriaService.atualizarCategoriaById(id, categoria);
    }

}
