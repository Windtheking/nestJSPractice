import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/Hello_jhan")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hola_santiago")
  getHola(): string {
    return this.appService.getHola();
  }

  @Get("/time")
  getTime(): string {
    return this.appService.getCurrentDateTime();
  }

  @Get("/sumar/:a/:b")
  getSumar(
      @Param('a') a: number, 
      @Param('b') b: number
    ): 
    number {
      return this.appService.getSumar(a, b);
    }

}


