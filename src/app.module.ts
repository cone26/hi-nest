import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// 데코레이터 => 클래스에 함수 기능을 추가할 수 있음
// app module == root module
// 하나의 모듈에서 하나의 어플리케이션을 생성

// terminal에 nest g co 치니까 걍 컨트롤러가 만들어짐 ..! 0_0 !
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
