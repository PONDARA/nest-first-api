import { Module } from "@nestjs/common";
import { FirstCrudController } from "./controller";
import { FirstCrudService } from "./service";

@Module({
    controllers:[FirstCrudController],
    providers:[FirstCrudService]
})
export class FirstCrudModule{}