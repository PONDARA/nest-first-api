import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudGenerateModule } from './crud-generate/crud-generate.module';
import { FirstCrudModule } from './first-crud/module';
import { LoggerMiddleWare } from './common/middleware/logger-middleware';
import { CrudGenerateController } from './crud-generate/crud-generate.controller';
import { FirstCrudController } from './first-crud/controller';

@Module({
  imports: [CrudGenerateModule,FirstCrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleWare)
    .exclude(
      { path: 'crud-generate/test', method: RequestMethod.POST }
    )
    .forRoutes(CrudGenerateController,FirstCrudController)
  }
}
