import { Test, TestingModule } from '@nestjs/testing';
import { RegisterService } from './register.service';
import { RegisterRepository } from '../repository/register.repository';
import { RegisterDto } from '../dto/register.dto';
import { ConflictException } from '@nestjs/common';

describe('RegisterService', () => {
  let service: RegisterService;
  let repository: RegisterRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RegisterService,
        {
          provide: RegisterRepository,
          useValue: {
            findByEmailOrCpf: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RegisterService>(RegisterService);
    repository = module.get<RegisterRepository>(RegisterRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw ConflictException if email or cpf already exist', async () => {
    jest.spyOn(repository, 'findByEmailOrCpf').mockResolvedValueOnce({ id: 1 } as any);

    const dto = { email: 'a@a.com', cpf: '123' } as RegisterDto;

    await expect(service.create(dto)).rejects.toThrow(ConflictException);
  });

  it('should save a new register if there is no duplication', async () => {
    jest.spyOn(repository, 'findByEmailOrCpf').mockResolvedValueOnce(null);
    jest.spyOn(repository, 'save').mockResolvedValueOnce({ id: 1, email: 'a@a.com' } as any);

    const dto = { email: 'a@a.com', cpf: '123' } as RegisterDto;

    const result = await service.create(dto);

    expect(result).toEqual({ id: 1, email: 'a@a.com' });
    expect(repository.save).toHaveBeenCalledWith(dto);
  });
});
