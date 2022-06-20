import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { ConfigModule } from '@nestjs/config';
import { connectStringMongodb } from './database/connectString';

@Module({
  imports: [
    MongooseModule.forRoot(connectStringMongodb),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
