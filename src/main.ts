import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { join } from 'path';
import { Transport, MicroserviceOptions } from "@nestjs/microservices"

async function bootstrap() {

  const app = await NestFactory.createMicroservice(<MicroserviceOptions>AppModule, {
    Transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'hero',
      protoPath: join(__dirname, 'hero/hero.proto')
    }
  });
 
  app.listen(() => console.log('localhost:50051'));
}
bootstrap();

