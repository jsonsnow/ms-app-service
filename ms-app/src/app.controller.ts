import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { text } from 'express';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import {MathService} from './math/math.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/math/wordcount')
  wordCount(
    @Body() {text}: {text: string}
    ) : Observable< { [key: string]: number}> {
      this.client.emit('math:wordcount_log', text)
    return this.client.send('math:wordcount', text)
  }

  // @Post('/math/wordcount')
  // wordCoount(@Body() {text}: {text: string}): {[key: string]: number} {
  //   return this.mathService.calculateWordCount(text);
  // }
}
