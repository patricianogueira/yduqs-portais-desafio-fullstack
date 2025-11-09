import { v4 as uuid } from 'uuid';

export class RegisterEntity {
    id: string = uuid();
    fullName: string;
    cpf: string;
    birthDate: string;
    email: string;
    phone: string;
    highSchoolGraduationYear: string;
    agreeToTerms: boolean;
    acceptUpdates?: boolean;
}