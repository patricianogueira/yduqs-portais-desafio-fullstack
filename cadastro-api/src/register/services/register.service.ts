import { Injectable } from '@nestjs/common';
import { IRegisterService } from '../interfaces/register.service.interface';
import { RegisterRepository } from '../repository/register.repository';
import { RegisterDto } from '../dto/register.dto';
import { RegisterEntity } from '../entities/register.entity';

@Injectable()
export class RegisterService implements IRegisterService {
    constructor(private readonly registerRepository: RegisterRepository) { }

    create(dto: RegisterDto): RegisterEntity {
        return this.registerRepository.
            save(dto);
    }
}
