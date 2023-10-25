import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { UserModel } from './user.model';
import { initialState } from './initial-state';

@Injectable({ providedIn: 'root' })
export class UserStore extends BaseStore<UserModel> {
  constructor() {
    super(initialState);
  }

  setUser(user: UserModel) {
    this.setState(user);
  }

  clearUser() {
    this.setState(initialState);
  }
}
