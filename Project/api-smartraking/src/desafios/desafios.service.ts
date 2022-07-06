import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CreateDesafioDto } from './dtos/create-desafio.dto';
import { DesafiosInterface } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(@InjectModel("Desafios") private readonly desafiosModel: Model<DesafiosInterface>, 
    private readonly jogadoresService: JogadoresService){}
    

    async createDesafio(createDesafio:CreateDesafioDto): Promise<void>{

        const { jogadores } = createDesafio;
        const [playerOne, playerTwo] = jogadores;
        
        const jogadorOne = await this.jogadoresService.listJogadorById(playerOne._id)
        const jogadorTwo = await this.jogadoresService.listJogadorById(playerTwo._id)

        if(jogadorOne && jogadorTwo){
            const createNewDesafio = new this.desafiosModel(createDesafio);
            createNewDesafio.save();
        }else{
            throw new BadRequestException(`Jogadores informados não estão cadastrados na base.`)
        }
        
    }
    
}
