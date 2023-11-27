import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class TimeValidators {
  static dateGreaterThanToday: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const selectedDate: Date = new Date(control.value);
    const currentDate: Date = new Date();

    if (selectedDate >= currentDate) {
      return null;
    } else {
      return { dateError: true };
    }
  };

  static durationGreaterThan(duration: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const durationField = control.value;

      if (durationField > duration) {
        return null;
      } else {
        return { timeError: true };
      }
    };
  }
}
