import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import type { IRegisterService } from './interfaces/register.service.interface';

@Controller('register')
export class RegisterController {
  constructor(@Inject('IRegisterService') private readonly registerService: IRegisterService) { }

  @Post()
  create(@Body() dto: RegisterDto) {
    return this.registerService.create(dto);
  }
}
