import { Module } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { DesafiosController } from './desafios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosSchema } from './schema/desagio.schema';
import { JogadoresModule } from 'src/jogadores/jogadores.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  imports: [MongooseModule.forFeature([{name: "Desafios", schema: DesafiosSchema}]), JogadoresModule, CategoriasModule],
  providers: [DesafiosService],
  controllers: [DesafiosController]
})
export class DesafiosModule {}
