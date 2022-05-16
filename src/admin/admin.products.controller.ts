import { Controller, Get, Render } from '@nestjs/common';
import { ProductService } from 'src/models/product.service';

@Controller('/admin/products')
export class AdminProductsController {
  constructor(private readonly productsService: ProductService) {}

  @Get('/')
  @Render('admin/products/index')
  async index() {
    const products = await this.productsService.findAll();

    const viewData = {
      title: 'Admin Page - Admin - Online Store',
      products,
    };

    return {
      viewData,
    };
  }
}
