import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudGenerateService } from './crud-generate.service';
import { CreateCrudGenerateDto } from './dto/create-crud-generate.dto';
import { UpdateCrudGenerateDto } from './dto/update-crud-generate.dto';
import internal from 'stream';

@Controller('crud-generate')
export class CrudGenerateController {
  constructor(private readonly crudGenerateService: CrudGenerateService) {}

  @Post('boror')
  post(@Body() body: CreateCrudGenerateDto){
    return body
  }

  @Post()
  create(@Body() createCrudGenerateDto: CreateCrudGenerateDto) {
    return this.crudGenerateService.create(createCrudGenerateDto);
  }

  @Get()
  findAll() {
    return this.crudGenerateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudGenerateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudGenerateDto: UpdateCrudGenerateDto) {
    return this.crudGenerateService.update(+id, updateCrudGenerateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudGenerateService.remove(+id);
  }
}
