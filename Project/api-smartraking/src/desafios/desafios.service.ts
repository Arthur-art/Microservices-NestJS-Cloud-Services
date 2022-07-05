import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDesafioDto } from './dtos/create-desafio.dto';
import { DesafiosInterface } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(@InjectModel("Desafios") private readonly desafiosModel: Model<DesafiosInterface>){}

    async createDesafio(createDesafio:CreateDesafioDto): Promise<void>{
        
        const createNewDesafio = new this.desafiosModel(createDesafio);

        createNewDesafio.save();
    }
    
}
