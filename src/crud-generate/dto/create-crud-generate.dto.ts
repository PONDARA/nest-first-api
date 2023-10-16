import { IsNumber, IsString, validate } from 'class-validator';
export class CreateCrudGenerateDto {
    @IsString()
    name: string;
    @IsNumber()
    age: number;
}

validate(CreateCrudGenerateDto).then(errors => {
    console.log(errors)
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log('validation failed. errors: ', errors);
    } else {
      console.log('validation succeed');
    }
  });
