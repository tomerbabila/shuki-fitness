import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { UserModel } from './user.model';
import { initialState } from './initial-state';
import { User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserStore extends BaseStore<UserModel> {
  private fbUser$ = this.select(state => state.fbUser);

  constructor() {
    super(initialState);
  }

  setFbUser(fbUser: User | undefined) {
    this.setState({
      fbUser: fbUser,
    });
  }
}
