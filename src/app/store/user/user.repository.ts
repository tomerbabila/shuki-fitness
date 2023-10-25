import { Injectable } from '@angular/core';
import { BaseRepository } from '..';
import { UserModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserRepository extends BaseRepository<UserModel> {
  constructor() {
    super('users');
  }
}
