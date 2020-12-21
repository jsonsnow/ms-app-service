import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  public showHome() {
    const user = { name: 'NestJS' };
    return { user };
  }

  @Get()
  @Render('detail')
  public showDetail() {
    const detail = {msg: '我是详情页'}
    return {detail}
  }
}
