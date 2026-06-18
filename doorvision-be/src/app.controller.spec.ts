import { Test, TestingModule } from '@nestjs/testing';
import { AluminumSystemsController } from './modules/aluminum-systems/aluminum-systems.controller';
import { AluminumSystemsService } from './modules/aluminum-systems/aluminum-systems.service';

describe('AluminumSystemsController', () => {
  let controller: AluminumSystemsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AluminumSystemsController],
      providers: [AluminumSystemsService],
    }).compile();

    controller = app.get<AluminumSystemsController>(AluminumSystemsController);
  });

  describe('findAll', () => {
    it('should return list of aluminum systems', () => {
      const result = controller.findAll();
      expect(result).toHaveLength(2);
      expect(result[0]).toHaveProperty('name', 'Xingfa hệ 55');
    });
  });
});
