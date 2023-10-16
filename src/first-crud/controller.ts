import { Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { FirstCrudService } from "./service";

@ApiTags('First Crud')
@Controller('first-crud')
export class FirstCrudController {

    constructor(private readonly service: FirstCrudService){}

    @Post('create')
    create(){
        return this.service.create;
    }

   @Get('getAll')
   findAll(){
    return this.service.findAll;
   }
   
   @Post('getOne')
   findOne(){
    return this.service.findOne;
   }

}