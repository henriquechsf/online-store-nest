import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    const viewData = {
      title: 'Home Page - Online Store',
    };

    return {
      viewData,
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = {
      title: 'About Us- Online Store',
      subtitle: 'About Us',
      description: 'This is a about page...',
      author: 'Developed by: Carlos Henrique',
    };

    return {
      viewData,
    };
  }
}
