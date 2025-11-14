export interface RegisterRequest {
    fullName: string;
    cpf: string;
    birthDate: string;
    email: string;
    phone: string;
    highSchoolGraduationYear: string;
    agreeToTerms: boolean;
    acceptUpdates: boolean
}