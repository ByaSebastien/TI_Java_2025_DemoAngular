import {AbstractControl, ValidatorFn} from '@angular/forms';

export const beforeTodayValidator = (): ValidatorFn | null => {
  return (control: AbstractControl) => {
    let value: Date = new Date(control.value);
    let today: Date = new Date();

    if(value === null || value === undefined){
      return null;
    }

    if(value < today){
      return null;
    }

    return {beforeToday: true};
  }
}
