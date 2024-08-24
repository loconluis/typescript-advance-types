import { ROLES, User } from './01-enums';

const currentUser: User = {
  username: 'loconluis',
  role: ROLES.CUSTOMER,
};

const checkRole = (role: ROLES) => {
  if (currentUser.role === role) {
    return true;
  }

  return false;
};
console.log('RTA1', checkRole(ROLES.ADMIN));

const checkRoleWithOther = (role1: ROLES, role2: ROLES) => {
  if (role1 === role2) {
    return true;
  }

  return false;
};
console.log('RTA2', checkRoleWithOther(ROLES.ADMIN, ROLES.SELLER));

const checkRoleWithOtherArr = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};
console.log('RTA3', checkRoleWithOtherArr([ROLES.ADMIN, ROLES.SELLER]));

const checkRoleWithOtherUsingRestOperator = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};
console.log(
  'RTA4',
  checkRoleWithOtherUsingRestOperator(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
);
