import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import type { IRegisterService } from './interfaces/register.service.interface';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('register')
@Controller('register')
export class RegisterController {
  constructor(@Inject('IRegisterService') private readonly registerService: IRegisterService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'Registro criado com sucesso.' })
  @ApiResponse({ status: 409, description: 'CPF ou e-mail já existente.' })
  create(@Body() dto: RegisterDto) {
    return this.registerService.create(dto);
  }
}
