import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { ConfigModule } from '@nestjs/config';
import { config } from "dotenv"

config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_CONNECT_STRING),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
