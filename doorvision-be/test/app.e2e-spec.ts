import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AluminumSystems (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/aluminum-systems (GET)', () => {
    return request(app.getHttpServer())
      .get('/aluminum-systems')
      .expect(200)
      .expect([
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
      ]);
  });

  afterEach(async () => {
    await app.close();
  });
});
