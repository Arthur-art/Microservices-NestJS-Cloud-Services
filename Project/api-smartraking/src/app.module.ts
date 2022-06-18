import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://arthur-art:236993MongodbArthur@cluster0.n7bar.mongodb.net/?retryWrites=true&w=majority'),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
