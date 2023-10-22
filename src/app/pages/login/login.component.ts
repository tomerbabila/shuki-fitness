import { Component, OnInit } from '@angular/core';
import { RecaptchaVerifier, getAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  phoneNumberFormGroup = this.fb.group({
    phoneNumber: ['', Validators.required],
  });

  otpFormGroup = this.fb.group({
    otp: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const auth = getAuth();

    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      { size: 'invisible' },
      auth
    );
  }

  login() {
    const phoneNumber = this.phoneNumberFormGroup.controls['phoneNumber'].value;
    if (phoneNumber) {
      this.authService.login(phoneNumber);
    }
  }
}
