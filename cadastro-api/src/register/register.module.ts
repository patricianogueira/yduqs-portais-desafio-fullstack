import { Module } from '@nestjs/common';
import { RegisterService } from './services/register.service';
import { RegisterRepository } from './repository/register.repository';
import { RegisterProvider } from './register.providers';

@Module({
  providers: [RegisterService, RegisterRepository, RegisterProvider],
})
export class RegisterModule {}
