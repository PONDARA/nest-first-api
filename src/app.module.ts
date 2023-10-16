import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudGenerateModule } from './crud-generate/crud-generate.module';
import { FirstCrudModule } from './first-crud/module';

@Module({
  imports: [CrudGenerateModule,FirstCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
