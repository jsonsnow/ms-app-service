import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('math:wordcount')
  wordCount(text: string): {[key: string] : number} {
    return this.appService.calculateWordCount(text);
  }

  @EventPattern('math:wordcount_log')
  wordCountLog(text: string): void {
    console.log(text)
  }
}
