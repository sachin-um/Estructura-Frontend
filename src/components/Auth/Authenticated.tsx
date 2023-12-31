import type { JwtPayload } from 'jwt-decode';
import type { PropsWithChildren } from 'react';

import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectRole } from '../../redux/UserAuthenticationReducer';

const RolesRequired = (AllowedRoles: Role[]) => {
  return function Auth(props: PropsWithChildren) {
    const currentRole = useSelector(selectRole);
    const navigate = useNavigate();
    const refreshToken = localStorage.getItem('refreshToken') as string;
    let tokenExpired = false;
    if (refreshToken) {
      const token = jwt_decode<JwtPayload>(refreshToken);
      tokenExpired =
        token !== undefined && (token.exp ?? 0) < Date.now() / 1000;
      console.log(
        'Refresh Token expires in ' +
          Math.floor((token.exp ?? 0) - Date.now() / 1000) +
          ' seconds',
      );
    }
    const isAuthenticated =
      currentRole && AllowedRoles.includes(currentRole) && !tokenExpired;

    useEffect(() => {
      if (!isAuthenticated && window.location.pathname !== '/SignIn') {
        const link = encodeURI(
          '/SignIn?' +
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
const RetailOwnerAuthenticated = RolesRequired(['RETAILSTORE']);
const ArchitectAuthenticated = RolesRequired(['ARCHITECT']);

export {
  AdminAuthenticated,
  ArchitectAuthenticated,
  CustomerAuthenticated,
  RetailOwnerAuthenticated,
};

export default RolesRequired;
