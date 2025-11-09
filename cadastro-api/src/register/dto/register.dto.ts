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

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: ValidationMessages.FULL_NAME_REQUIRED })
    @Matches(/^\S+\s+\S+.*$/, { message: ValidationMessages.FULL_NAME_INVALID })
    fullName: string;

    @IsString()
    @Matches(/^\d{11}$/, { message: ValidationMessages.CPF_INVALID })
    cpf: string;

    @IsString()
    @IsNotEmpty()
    @IsAgeValid(16, 125)
    birthDate: string;

    @IsEmail({}, { message: ValidationMessages.EMAIL_INVALID })
    email: string;

    @IsString()
    @Matches(/^\+?\d{10,15}$/, { message: ValidationMessages.PHONE_INVALID })
    phone: string;

    @IsString()
    @Matches(/^\d{4}$/, { message: ValidationMessages.HIGH_SCHOOL_YEAR_INVALID })
    highSchoolGraduationYear: string;

    @MustBeTrue({ message: ValidationMessages.AGREE_TERMS_REQUIRED })
    agreeToTerms: boolean;
    
    @IsOptional()
    @IsBoolean()
    acceptUpdates?: boolean;
}



