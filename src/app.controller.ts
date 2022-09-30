import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controller == express의 router
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // express의 get router와 같은 역할
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // 데코레이터
  @Get('/hello')
  sayHello(): string {
    // 함수
    return this.appService.getHi();
  }
  // 데코레이터는 그 데코레이터를 꾸며주는 함수나 클래스와 붙어있어야 한다. => 공백 x
}
