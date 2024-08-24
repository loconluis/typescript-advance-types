export enum ROLES {
  ADMIN = 'Admin role',
  SELLER = 'Seller role',
  CUSTOMER = 'Customer role',
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
