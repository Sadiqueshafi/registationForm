import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomevalidationserviceService {

  constructor() { }
  // tslint:disable-next-line:typedef
  passwordMatchValidator(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const passwordControl = formGroup.controls[password];
  //     const confirmPasswordControl = formGroup.controls[confirmPassword];
  //     if (!passwordControl || !confirmPasswordControl) {
  //        null;
  //     }
  //     if (
  //       confirmPasswordControl.errors &&
  //       !confirmPasswordControl.errors.passwordMismatch
  //     ) {
  //        null;
  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: true });
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //     }
  //   };
  }
}
