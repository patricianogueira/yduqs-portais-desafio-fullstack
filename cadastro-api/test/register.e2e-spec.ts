import { PrismaClient } from '@prisma/client';
import { RegisterService } from 'src/register/services/register.service';
import { RegisterRepository } from 'src/register/repository/register.repository';
import { RegisterDto } from 'src/register/dto/register.dto';
import { ConflictException } from '@nestjs/common';

describe('RegisterService (Integration)', () => {
  let service: RegisterService;
  let prisma: PrismaClient;

  beforeAll(async () => {
    prisma = new PrismaClient();
    const repo = new RegisterRepository();
    service = new RegisterService(repo);
  });

  beforeEach(async () => {
    await prisma.register.deleteMany();
  });

    it('should create a new register successfully', async () => {
        const dto: RegisterDto = {
            fullName: 'Patricia Nogueira',
            email: 'patricia@example.com',
            cpf: '12345678900',
            birthDate: '1990-05-05',
            phone: '11999999999',
            highSchoolGraduationYear: "2008",
            acceptUpdates: true,
            agreeToTerms: true,
        };

        const result = await service.create(dto);
        expect(result).toHaveProperty('id');
        expect(result.email).toBe(dto.email);
    });

    it('should throw ConflictException if email or CPF already exists', async () => {
        const dto: RegisterDto = {
            fullName: 'Patricia Nogueira',
            email: 'patricia@example.com',
            cpf: '12345678900',
            birthDate: '1990-05-05',
            phone: '11999999999',
            highSchoolGraduationYear: "2008",
            acceptUpdates: true,
            agreeToTerms: true,
        };
        await service.create(dto);

        await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
});
