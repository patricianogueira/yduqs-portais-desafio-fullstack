import { Injectable } from '@nestjs/common';
import { RegisterEntity } from '../entities/register.entity';
import { RegisterDto } from '../dto/register.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RegisterRepository {
    private prisma = new PrismaClient();

    async save(dto: RegisterDto): Promise<RegisterEntity> {
    const created = await this.prisma.register.create({
      data: {
        ...dto,
        birthDate: new Date(dto.birthDate), 
        acceptUpdates: dto.acceptUpdates ?? null, 
      },
    });

    return created;
  }
}

