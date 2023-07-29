import jwt_decode, { type JwtPayload } from 'jwt-decode';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RolesRequired = (AllowedRoles: Role[]) => {
  return function Auth(props: PropsWithChildren) {
    const navigate = useNavigate();
    const refreshToken = localStorage.getItem('refreshToken') as string;
    const tokenExpired = false;
    if (refreshToken) {
      const token = jwt_decode<JwtPayload>(refreshToken);
      const tokenExpired =
        token !== undefined && (token.exp ?? 0) < Date.now() / 1000;
      console.log(
        'Refresh Token expires in ' +
          Math.floor((token.exp ?? 0) - Date.now() / 1000) +
          ' seconds',
      );
    }
    const isAuthenticated =
      AllowedRoles.includes(localStorage.getItem('role') as Role) &&
      !tokenExpired;

    useEffect(() => {
      if (!isAuthenticated && window.location.pathname !== '/SignIn') {
        const link = encodeURI(
          '/auth/SignIn?' +
            (tokenExpired ? 'tokenExpired=true' : '') +
            '&from=' +
            window.location.pathname +
            window.location.search,
        );
        navigate(link);
      }
    });

    return isAuthenticated ? <>{props.children}</> : <>Unauthorized</>;
  };
};

const AdminAuthenticated = RolesRequired(['ADMIN']);
const CustomerAuthenticated = RolesRequired(['CUSTOMER']);
const RetailOwnerAuthenticated = RolesRequired(['RETAILOWNER']);
const ArchitectAuthenticated = RolesRequired(['ARCHITECT']);

export {
  AdminAuthenticated,
  ArchitectAuthenticated,
  CustomerAuthenticated,
  RetailOwnerAuthenticated,
};

export default RolesRequired;
