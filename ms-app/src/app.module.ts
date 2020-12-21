import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './math/math.service';
import { SsrService } from './ssr/ssr.service';
import { SsrController } from './ssr/ssr.controller';

@Module({
  imports: [
    ClientsModule.register([
    {name : 'MATH_SERVICE', transport: Transport.TCP}
  ])],
  controllers: [AppController, SsrController],
  providers: [AppService, SsrService],
})
export class AppModule {}
