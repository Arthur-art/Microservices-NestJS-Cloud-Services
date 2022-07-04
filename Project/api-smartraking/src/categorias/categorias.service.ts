import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoriaDto } from './dtos/create-categoria.dto';
import { UpdatingCategoriaDto } from './dtos/updating-categoria.dto';
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

        return await this.categoriaModel.find().populate('jogadores').exec()
    }

    async listCategoriaById(id:string): Promise<CategoriaInterface>{

        const categoriaById = await this.categoriaModel.findById(id).exec();

        return categoriaById;
    }

    async atualizarCategoriaById(id:string, categoria:UpdatingCategoriaDto): Promise<CategoriaInterface>{

        const categoriaEncontrada = await this.categoriaModel.findById(id).exec();

        if(categoriaEncontrada){
            return this.categoriaModel.findByIdAndUpdate(id, categoria);
        }else{
            throw new BadRequestException(`Categoria não cadastrada.`)
        }
    }

    async atribuirCategoriaJogador(params: string[]):Promise<void>{

        const idCategoria = params['idCategoria'];
        const idJogador = params['idJogador'];

        const categoriaEncontrada = await this.categoriaModel.findById(idCategoria).exec();
      //const jogadorCadastrado
        
      if(!categoriaEncontrada){
        throw new BadRequestException(`Categoria ${idCategoria} não cadastrada.`);
      }

      categoriaEncontrada.jogadores.push(idJogador);

      await this.categoriaModel.findByIdAndUpdate(idCategoria, categoriaEncontrada).exec();
    }
}
