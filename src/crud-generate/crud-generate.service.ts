import { Injectable } from '@nestjs/common';
import { CreateCrudGenerateDto } from './dto/create-crud-generate.dto';
import { UpdateCrudGenerateDto } from './dto/update-crud-generate.dto';

@Injectable()
export class CrudGenerateService {
  create(createCrudGenerateDto: CreateCrudGenerateDto) {
    return 'This action adds a new crudGenerate';
  }

  findAll() {
    return `This action returns all crudGenerate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudGenerate`;
  }

  update(id: number, updateCrudGenerateDto: UpdateCrudGenerateDto) {
    return `This action updates a #${id} crudGenerate`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudGenerate`;
  }
}
