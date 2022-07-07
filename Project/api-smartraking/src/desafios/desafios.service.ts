import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CreateDesafioDto } from './dtos/create-desafio.dto';
import { UpdateDesafioDto } from './dtos/update-desafio.dto';
import { DesafiosInterface } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(@InjectModel("Desafios") private readonly desafiosModel: Model<DesafiosInterface>, 
    private readonly jogadoresService: JogadoresService){}
    

    async createDesafio(createDesafio:CreateDesafioDto): Promise<void>{

        const { jogadores, solicitante } = createDesafio;
        const [playerOne, playerTwo] = jogadores;
        
        const solicitanteIsValid = await this.jogadoresService.listJogadorById(solicitante)
        const jogadorOne = await this.jogadoresService.listJogadorById(playerOne._id)
        const jogadorTwo = await this.jogadoresService.listJogadorById(playerTwo._id)

        if(solicitanteIsValid && jogadorOne && jogadorTwo){
            const createNewDesafio = new this.desafiosModel(createDesafio);
            createNewDesafio.save();
        }else{
            throw new BadRequestException(`Jogadores informados não estão cadastrados na base.`)
        }
        
    }

    async listDesafios():Promise<DesafiosInterface[]>{

        return this.desafiosModel.find().exec()
    }

    async listDesafiosBySolicitante(jogadorId:string):Promise<DesafiosInterface>{

       const jogadorIsValid = await this.jogadoresService.listJogadorById(jogadorId)

       if(jogadorIsValid){
        return await this.desafiosModel.findOne({solicitante: jogadorId}).exec()
       }else{
        throw new BadRequestException(`Jogador não cadastrado na base de dados.`)
       }
    }

    async updateDesafio(desafioId:string,updateDesafioDto: UpdateDesafioDto): Promise<DesafiosInterface>{

        const desafioIsvalid = await this.desafiosModel.findById(desafioId)

        if(desafioIsvalid){
            return await this.desafiosModel.findByIdAndUpdate(desafioId, updateDesafioDto).exec()
           }else{
            throw new BadRequestException(`Jogador não cadastrado na base de dados.`)
           }
    }
    
}
