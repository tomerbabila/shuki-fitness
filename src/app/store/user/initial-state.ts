import { UserModel } from './models';

export const initialState: UserModel = {
  uid: '',
  email: '',
  role: {
    admin: false,
    user: true,
  },
};
