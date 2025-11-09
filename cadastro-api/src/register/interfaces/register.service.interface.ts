import { RegisterDto } from '../dto/register.dto';
import { RegisterEntity } from '../entities/register.entity';

export interface IRegisterService {
    create(dto: RegisterDto): RegisterEntity;
}


