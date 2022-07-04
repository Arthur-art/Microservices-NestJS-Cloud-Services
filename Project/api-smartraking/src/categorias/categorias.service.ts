import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { CategoriaInterface } from './interfaces/categoria.interface';

@Injectable()
export class CategoriasService {

    constructor(@InjectModel('Categoria') private readonly categoriaModel: Model<CategoriaInterface>){}

    async createCategoria(criarCategoria: CreateCategoriaDto): Promise<void>{

        const {categoria} = criarCategoria;

        const categoriaEncontrada = await this.categoriaModel.findOne({categoria}).exec();

        if(categoriaEncontrada){
            throw new BadRequestException(`Categoria ${categoria} já cadastrada.`);
        }

        const categoriaCriada = new this.categoriaModel(criarCategoria);
        categoriaCriada.save();

    }

    async listCategorias(): Promise<CategoriaInterface[]>{

        return await this.categoriaModel.find().exec()
    }

    async listCategoriaById(id:string): Promise<CategoriaInterface>{

        const categoriaById = await this.categoriaModel.findById(id).exec();

        return categoriaById;
    }
}
