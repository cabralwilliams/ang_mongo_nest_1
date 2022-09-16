import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //Allows frontend and backend to run on different ports
  await app.listen(3000);
}
bootstrap();
