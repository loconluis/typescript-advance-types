export enum ROLES {
  ADMIN = 'Admin role',
  SELLER = 'Seller role',
  CUSTOMER = 'Customer role',
}

export type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'loconluis',
  role: ROLES.ADMIN,
};
