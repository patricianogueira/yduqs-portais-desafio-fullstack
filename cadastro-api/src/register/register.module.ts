import { Module } from '@nestjs/common';
import { RegisterRepository } from './repository/register.repository';

@Module({
  providers: [RegisterRepository],
})
export class RegisterModule {}
