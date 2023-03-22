import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { ProductService } from './models/product.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  @Render('products/index')
  async index() {
    const products = await this.productService.findAll();

    const viewData = {
      title: 'Products - Online Store',
      description: 'List of Products',
      products,
    };

    return { viewData };
  }

  @Get(':id')
  async show(@Param() params, @Res() response) {
    const product = await this.productService.findOne(params.id);

    if (!product) {
      return response.redirect('/products');
    }

    const viewData = {
      title: `${product.name} - Online Store`,
      subtitle: `${product.name} - Product Information`,
      product,
    };

    return response.render('products/show', { viewData });
  }
}
