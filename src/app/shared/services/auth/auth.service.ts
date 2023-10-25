import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.pipe();
  }

  async loginWithEmail(email: string, password: string) {
    const userCredential = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );

    return userCredential.user;
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const userCredential = await this.afAuth.signInWithPopup(provider);

    return userCredential.user;
  }

  async register(email: string, password: string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    return userCredential.user;
  }

  async logout() {
    await this.afAuth.signOut();
  }
}
