import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'Admin role',
  SELLER = 'Seller role',
  CUSTOMER = 'Customer role',
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
