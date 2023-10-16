import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudGenerateDto } from './create-crud-generate.dto';

export class UpdateCrudGenerateDto extends PartialType(CreateCrudGenerateDto) {}
