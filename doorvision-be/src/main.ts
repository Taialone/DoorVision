import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log('DoorVision API is running on http://localhost:3000');
}
bootstrap().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
