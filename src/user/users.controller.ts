import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from '../user/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/create")
  create(@Body() body: { name: string; email: string; ficha: string }) {
    return this.usersService.create(body.name, body.email, body.ficha);
  }

  @Get("/all")
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/oneBy/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }
}