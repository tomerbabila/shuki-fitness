import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { UserModel, UserStateModel } from './models';
import { initialState } from './initial-state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserStore extends BaseStore<UserStateModel> {
  user$: Observable<UserModel> = this.select(state => state.user);
  isLoggedIn$: Observable<boolean> = this.select(state => state.isLoggedIn);

  constructor() {
    super(initialState);
  }

  setUser(user: UserModel) {
    this.setState({ isLoggedIn: true, user: user });
  }

  clearUser() {
    this.setState({ isLoggedIn: false, user: initialState.user });
  }
}
