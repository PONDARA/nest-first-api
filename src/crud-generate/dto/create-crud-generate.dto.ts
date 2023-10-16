import { IsNumber, IsOptional, IsString, validate } from 'class-validator';
export class CreateCrudGenerateDto {
    @IsOptional()
    @IsString()
    name: string;
    @IsNumber()
    age: number;
}
