import { RolesModel } from './roles.model';

export interface UserModel {
  uid: string;
  email: string;
  role: RolesModel;
}
