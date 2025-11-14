import { RegisterService } from './services/register.service';
import { IRegisterService } from './interfaces/register.service.interface';

export const RegisterProvider = {
  provide: 'IRegisterService', 
  useClass: RegisterService,
};
