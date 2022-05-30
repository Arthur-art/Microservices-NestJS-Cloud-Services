import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';

@Module({
  controllers: [JogadoresController],
  providers: []
})
export class JogadoresModule {}
