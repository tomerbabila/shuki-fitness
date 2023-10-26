import { UserStateModel } from './models';

export const initialState: UserStateModel = {
  isLoggedIn: false,
  user: {
    uid: '',
    email: '',
    role: {},
  },
};
