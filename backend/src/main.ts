import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NO habilitamos CORS porque el proxy de Nginx hará que todo
  // parezca venir del mismo dominio.
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
