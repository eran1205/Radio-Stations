import { NestFactory } from '@nestjs/core';
import { RadioStationModule } from './radiostation.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(RadioStationModule);

  const options = new DocumentBuilder()
    .setTitle('Radio Stations transform microservice')
    .setDescription('The purpose of this MS is to provide API interface for radio stations')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
