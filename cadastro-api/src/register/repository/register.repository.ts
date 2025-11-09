import { Injectable } from '@nestjs/common';
import { RegisterEntity } from '../entities/register.entity';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class RegisterRepository {
    private registers: RegisterEntity[] = [];

    save(dto: RegisterDto): RegisterEntity {
        const entity = new RegisterEntity();
        Object.assign(entity, dto);
        this.registers.push(entity);
        
        return entity;
    }
}
