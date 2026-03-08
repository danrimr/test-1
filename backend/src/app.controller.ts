import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('counter')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCounter() {
    return this.appService.getCounter();
  }

  @Post('increment')
  incrementCounter() {
    return this.appService.incrementCounter();
  }
}
