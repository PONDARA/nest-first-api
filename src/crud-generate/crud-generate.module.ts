import { Module } from '@nestjs/common';
import { CrudGenerateService } from './crud-generate.service';
import { CrudGenerateController } from './crud-generate.controller';

@Module({
  controllers: [CrudGenerateController],
  providers: [CrudGenerateService],
})
export class CrudGenerateModule {}
