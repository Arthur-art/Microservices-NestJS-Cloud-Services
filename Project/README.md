
![image](https://user-images.githubusercontent.com/54858003/170092609-45fa87fa-80b1-4a5e-858d-a51c0aa61b4d.png)


### Iniciando o projeto com a cli do nestjs
- https://docs.nestjs.com/first-steps

### Desenvolvendo o modulo de jogadores
- https://docs.nestjs.com/modules#creating-modules

### Desenvolvendo o controller de jogadores
- https://docs.nestjs.com/controllers#creating-controllers

### Desenvolvendo o service de jogadores
- https://docs.nestjs.com/services#creating-services
- Trabalhando com lib uuid para gerar um id para o jogador
  - npm install uuid

### Trabalhando com mongoose
- https://docs.nestjs.com/data-access#mongoose
- npm install @nestjs/mongoose mongoose
- npm install --save-dev @types/mongoose

### Trabalhando com variáveis de ambiente
- npm install --save dotenv
- Adicionar antes dos modules principais a function config(); para configurar o .env
```js
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

```

### Trabalhando com ValidationPipe no nestjs
- https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe

### Trabalhando com Exception filters
- https://docs.nestjs.com/exception-filters#exception-filters
