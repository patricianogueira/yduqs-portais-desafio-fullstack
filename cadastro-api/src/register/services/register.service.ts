import { ConflictException, Injectable } from '@nestjs/common';
import { IRegisterService } from '../interfaces/register.service.interface';
import { RegisterRepository } from '../repository/register.repository';
import { RegisterDto } from '../dto/register.dto';
import { RegisterEntity } from '../entities/register.entity';

@Injectable()
export class RegisterService implements IRegisterService {
    constructor(private readonly registerRepository: RegisterRepository) { }

    async create(dto: RegisterDto): Promise<RegisterEntity> {

        const existingUser = await this.registerRepository.findByEmailOrCpf(dto.email, dto.cpf);

        if (existingUser) {
            throw new ConflictException('Email ou CPF já existe');
        }

        return this.registerRepository.
            save(dto);
    }
}
