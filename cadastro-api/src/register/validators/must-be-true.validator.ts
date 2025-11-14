import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ValidationMessages } from '../constants/validation-messages';

export function MustBeTrue(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'mustBeTrue',
      target: object.constructor,
      propertyName,
      options: { message: ValidationMessages.AGREE_TERMS_REQUIRED, ...validationOptions },
      validator: {
        validate(value: any, args: ValidationArguments) {
          return value === true;
        },
      },
    });
  };
}