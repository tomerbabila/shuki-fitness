import { UserModel } from './user.model';

export interface UserStateModel {
  user: UserModel;
  isLoggedIn: boolean;
}
