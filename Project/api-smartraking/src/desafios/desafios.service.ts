import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriasService } from 'src/categorias/categorias.service';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CreateDesafioDto } from './dtos/create-desafio.dto';
import { UpdateDesafioDto } from './dtos/update-desafio.dto';
import { DesafioStatus } from './enums/desafio-status.enum';
import { DesafiosInterface } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(@InjectModel("Desafios") private readonly desafiosModel: Model<DesafiosInterface>, 
    private readonly jogadoresService: JogadoresService, private readonly categoriasService: CategoriasService){}
    private readonly logger = new Logger(DesafiosService.name)

    async createDesafio(createDesafio:CreateDesafioDto): Promise<DesafiosInterface>{

        const jogadores = await this.jogadoresService.listJogadores()

        createDesafio.jogadores.map((jogadorDto)=>{
            const jogadorFilter = jogadores.filter((jogador)=>{
                return jogadorDto._id === jogador.id;
            })
            if(jogadorFilter.length == 0){
                throw new BadRequestException(`O id ${jogadorDto.id} não é um jogador.`)
            }
        });

        const categoriaDoJogador = await this.categoriasService.consultarCategoriaDoJogador(createDesafio.solicitante)

        if (!categoriaDoJogador) {
            throw new BadRequestException(`O solicitante precisa estar registrado em uma categoria!`)
        }

        const desafioCriado = new this.desafiosModel(createDesafio)
        desafioCriado.categoria = categoriaDoJogador.categoria
        desafioCriado.dataHoraSolicitacao = new Date()

        desafioCriado.status = DesafioStatus.PENDENTE
        this.logger.log(`desafioCriado: ${JSON.stringify(desafioCriado)}`)
        return await desafioCriado.save()

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
