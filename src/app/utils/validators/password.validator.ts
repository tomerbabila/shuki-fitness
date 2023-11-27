import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static passwordsMatch: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const verifyPassword = control.get('verifyPassword')?.value;

    return password === verifyPassword ? null : { passwordsDoNotMatch: true };
  };
}
