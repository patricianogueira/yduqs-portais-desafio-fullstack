import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ValidationMessages } from '../constants/validation-messages';
import { calculateAge } from '../utils/age.utils';

export function IsAgeValid(minAge: number, maxAge: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isAgeValid',
      target: object.constructor,
      propertyName,
      options: { message: ValidationMessages.BIRTH_DATE_INVALID, ...validationOptions },
      constraints: [minAge, maxAge],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const age = calculateAge(value);
          const [min, max] = args.constraints; 
          return age >= min && age <= max;
        },
      },
    });
  };
}

