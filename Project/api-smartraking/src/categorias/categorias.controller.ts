import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { IdValidationPipe } from 'src/common/pipes/id-validation.pipe';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { UpdatingCategoriaDto } from './dtos/updating-categoria.dto';
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

    @Put('atualizar-categoria/:id')
    async atualizarCategoriaById(@Param('id', IdValidationPipe) id:string, @Body() categoria: UpdatingCategoriaDto): Promise<CategoriaInterface>{
        return await this.categoriaService.atualizarCategoriaById(id, categoria);
    }

    @Post('atribuir-categoria-jogador/:idCategoria/jogadores/:idJogador')
    async atribuirCategoriaJogador(@Param() params: string[]): Promise<void>{
        
        return await this.categoriaService.atribuirCategoriaJogador(params);
    }

}
