import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Home Page - Online Store',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['description'] = 'This is a about page...';
    viewData['author'] = 'Developed by: Carlos Henrique';

    const data1 = 'About us - Online Store';

    return {
      title: data1,
      subtitle: 'About Us',
      viewData: viewData,
    };
  }
}
