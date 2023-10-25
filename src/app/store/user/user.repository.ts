import { Injectable } from '@angular/core';
import { BaseRepository } from '..';
import { UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super('users');
  }

  createByUid(user: UserModel): Promise<void> {
    const docRef = this.afs.doc(`users/${user.uid}`);
    const data: UserModel = {
      email: user.email,
      uid: user.uid,
    };
    return docRef.set(data, { merge: true });
  }
}
