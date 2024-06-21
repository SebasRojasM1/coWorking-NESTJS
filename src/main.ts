import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('coWorking - API')
    .setDescription(`This API will be in charge of managing the workspaces in coWorking. You will be able to manage all the related data, from the entry of new users, to the reservation of these spaces and viewing their availability.`)
    .setVersion('1.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);

  console.log("Project started => localhost:3000");
  console.log("=========================================================");
  console.log("Access to the project via Swagger: localhost:3000/api-doc");
}
bootstrap();
