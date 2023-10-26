import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RolesModel, UserModel } from '@store/user/models';
import { UserStore, UserRepository } from '@store/user';
import { GoogleAuthProvider } from 'firebase/auth';
import { switchMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private afAuth = inject(AngularFireAuth);
  private user!: UserModel;

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

    this.userStore.user$.subscribe(user => (this.user = user));
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

    const data = {
      email: userCredential.user?.email,
      uid: userCredential.user?.uid,
    };

    this.userRepository.createByUid(data as UserModel);

    return userCredential.user;
  }

  async register(email: string, password: string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const data = {
      email: userCredential.user?.email,
      uid: userCredential.user?.uid,
    };

    this.userRepository.createByUid(data as UserModel);

    return userCredential.user;
  }

  async logout() {
    await this.afAuth.signOut();
  }

  canRead() {
    console.log(this.user);
    const allowed: (keyof RolesModel)[] = ['admin', 'user'];
    return this.checkAuth(this.user, allowed);
  }

  canEditAndWrite() {
    const allowed: (keyof RolesModel)[] = ['admin'];
    return this.checkAuth(this.user, allowed);
  }

  private checkAuth(user: UserModel, allowedRoles: (keyof RolesModel)[]) {
    if (!user) return false;

    for (const role of allowedRoles) {
      if (user.role[role]) {
        return true;
      }
    }
    return false;
  }
}
