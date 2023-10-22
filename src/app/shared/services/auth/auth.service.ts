import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  login(phoneNumber: string) {
    const appVerifier = window.recaptchaVerifier;

    this.auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(console.log)
      .catch(console.log);
  }
}
