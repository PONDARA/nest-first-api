import { Test, TestingModule } from '@nestjs/testing';
import { CrudGenerateService } from './crud-generate.service';

describe('CrudGenerateService', () => {
  let service: CrudGenerateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudGenerateService],
    }).compile();

    service = module.get<CrudGenerateService>(CrudGenerateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
