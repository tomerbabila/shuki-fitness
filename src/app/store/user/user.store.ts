import { Injectable } from '@angular/core';
import { BaseStore } from '../base.store';
import { UserModel } from './user.model';
import { initialState } from './initial-state';

@Injectable({ providedIn: 'root' })
export class UserStore extends BaseStore<UserModel> {
  private user$ = this.select(state => state);

  constructor() {
    super(initialState);
  }
}
