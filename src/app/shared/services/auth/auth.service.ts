import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserModel } from '@store/user/user.model';
import { UserRepository } from '@store/user/user.repository';
import { UserStore } from '@store/user/user.store';
import { GoogleAuthProvider } from 'firebase/auth';
import { switchMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private afAuth = inject(AngularFireAuth);

  constructor(
    private userRepository: UserRepository,
    private userStore: UserStore
  ) {
    this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.userRepository.readById(user.uid);
          } else {
            return of(undefined);
          }
        })
      )
      .subscribe(user => {
        if (user) {
          this.userStore.setUser(user);
        } else {
          this.userStore.clearUser();
        }
      });
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

    this.userRepository.createByUid(userCredential.user as UserModel);

    return userCredential.user;
  }

  async register(email: string, password: string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    this.userRepository.createByUid(userCredential.user as UserModel);

    return userCredential.user;
  }

  async logout() {
    await this.afAuth.signOut();
  }
}
