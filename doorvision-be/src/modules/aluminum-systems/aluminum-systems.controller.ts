import { Controller, Get } from '@nestjs/common';
import { AluminumSystemsService } from './aluminum-systems.service';

@Controller('aluminum-systems')
export class AluminumSystemsController {
  constructor(
    private readonly aluminumSystemsService: AluminumSystemsService,
  ) {}

  @Get()
  findAll() {
    return this.aluminumSystemsService.findAll();
  }
}
