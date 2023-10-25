import { Injectable } from '@angular/core';
import { BaseRepository } from '../base.repository';
import { UserModel } from './models';

@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super('users');
  }

  createByUid({ email, uid }: UserModel): Promise<void> {
    const docRef = this.afs.doc(`users/${uid}`);

    const data: UserModel = {
      email: email,
      uid: uid,
      isAdmin: false,
    };

    return docRef.set(data, { merge: true });
  }
}
