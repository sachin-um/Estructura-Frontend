const Roles: Role[] = [
  'ADMIN',
  'ARCHITECT',
  'CARPENTER',
  'CONSTRUCTIONCOMPANY',
  'CUSTOMER',
  'ELECTRICIAN',
  'INTERIORDESIGNER',
  'LANDSCAPEARCHITECT',
  'MASONWORKER',
  'PAINTER',
  'RENTER',
  'RETAILSTORE',
  'USER',
];

/**
 * checks whether a string is actually a Role
 * @param role string to check
 */
const IsRole = (role: string): boolean => {
  return Roles.includes(role as Role);
};

export default IsRole;
