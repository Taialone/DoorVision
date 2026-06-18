import { Module } from '@nestjs/common';
import { AluminumSystemsModule } from './modules/aluminum-systems/aluminum-systems.module';

@Module({
  imports: [AluminumSystemsModule],
})
export class AppModule {}
