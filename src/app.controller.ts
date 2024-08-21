import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('오나ㅑ???');
    throw new HttpException(
      '에러 메세지당ddasdfasdfasdf',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
    // return this.appService.getHello();
  }
}
