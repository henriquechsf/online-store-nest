import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, ProductsController],
  providers: [],
})
export class AppModule {}
