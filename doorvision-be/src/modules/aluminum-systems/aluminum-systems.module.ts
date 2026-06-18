import { Module } from '@nestjs/common';
import { AluminumSystemsController } from './aluminum-systems.controller';
import { AluminumSystemsService } from './aluminum-systems.service';

@Module({
  controllers: [AluminumSystemsController],
  providers: [AluminumSystemsService],
})
export class AluminumSystemsModule {}
