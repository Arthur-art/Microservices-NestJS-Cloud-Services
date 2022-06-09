import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING,
      { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false }
      ),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
