import { 
  IsString, 
  IsNotEmpty, 
  IsEmail, 
  Matches, 
  IsBoolean, 
  IsOptional 
} from 'class-validator';
import { IsAgeValid } from '../validators/age.validator';
import { ValidationMessages } from '../constants/validation-messages';
import { MustBeTrue } from '../validators/must-be-true.validator';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class RegisterDto {
    @ApiProperty({ example: 'Maria Santos', description: 'Nome completo do usuário' })
    @IsString()
    @IsNotEmpty({ message: ValidationMessages.FULL_NAME_REQUIRED })
    @Matches(/^\S+\s+\S+.*$/, { message: ValidationMessages.FULL_NAME_INVALID })
    fullName: string;

    @ApiProperty({ example: '12345678900', description: 'CPF do usuário' })
    @IsString()
    @Matches(/^\d{11}$/, { message: ValidationMessages.CPF_INVALID })
    cpf: string;

    @ApiProperty({ example: '1998-10-10', description: 'Data de nascimento (YYYY-MM-DD)' })
    @IsString()
    @IsNotEmpty()
    @IsAgeValid(16, 125)
    birthDate: string;

    @ApiProperty({ example: 'santosmaria@email.com', description: 'Email do usuário' })
    @IsEmail({}, { message: ValidationMessages.EMAIL_INVALID })
    email: string;

    @ApiProperty({ example: '+5511999999999', description: 'Telefone do usuário' })
    @IsString()
    @Matches(/^\+?\d{10,15}$/, { message: ValidationMessages.PHONE_INVALID })
    phone: string;

    @ApiProperty({ example: '2008', description: 'Ano de conclusão do ensino médio' })
    @IsString()
    @Matches(/^\d{4}$/, { message: ValidationMessages.HIGH_SCHOOL_YEAR_INVALID })
    highSchoolGraduationYear: string;

    @ApiProperty({ example: true, description: 'Aceitação dos termos de uso' })
    @MustBeTrue({ message: ValidationMessages.AGREE_TERMS_REQUIRED })
    agreeToTerms: boolean;
    
    @ApiProperty({ example: false, description: 'Aceitação de receber atualizações e promoções (opcional)', required: false })
    @IsOptional()
    @IsBoolean()
    acceptUpdates?: boolean;
}



