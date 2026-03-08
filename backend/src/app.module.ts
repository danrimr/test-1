import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Counter } from './counter.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Leerá esto de Docker
      entities: [Counter],
      synchronize: true, // Crea la tabla automáticamente
    }),
    TypeOrmModule.forFeature([Counter]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
