import { Test, TestingModule } from '@nestjs/testing';
import { CrudGenerateController } from './crud-generate.controller';
import { CrudGenerateService } from './crud-generate.service';

describe('CrudGenerateController', () => {
  let controller: CrudGenerateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudGenerateController],
      providers: [CrudGenerateService],
    }).compile();

    controller = module.get<CrudGenerateController>(CrudGenerateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
