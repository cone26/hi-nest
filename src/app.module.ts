import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 데코레이터 => 클래스에 함수 기능을 추가할 수 있음
// app module == root module
// 하나의 모듈에서 하나의 어플리케이션을 생성
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
