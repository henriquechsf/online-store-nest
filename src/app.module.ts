import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { ProductService } from './models/product.service';
import { Product } from './models/product.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Product])],
  controllers: [AppController, ProductsController],
  providers: [ProductService],
})
export class AppModule {}
