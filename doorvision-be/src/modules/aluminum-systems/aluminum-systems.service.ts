import { Injectable } from '@nestjs/common';

@Injectable()
export class AluminumSystemsService {
  findAll() {
    return [
      {
        id: 1,
        name: 'Xingfa hệ 55',
        brand: 'Xingfa',
        code: 'XINGFA_55',
        status: 'active',
      },
      {
        id: 2,
        name: 'Xingfa hệ 93',
        brand: 'Xingfa',
        code: 'XINGFA_93',
        status: 'active',
      },
    ];
  }
}
