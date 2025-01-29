import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3017;

  await app.listen(PORT, async () => {
    console.log(`Server in running on port: ${PORT}`);
  });
}
bootstrap();
