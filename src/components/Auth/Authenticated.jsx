import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RolesRequired = (AllowedRoles) => {
  return function AdminAuthenticated(props) {
    const navigate = useNavigate();
    const { children } = props;
    const refreshToken = localStorage.getItem('refreshToken');
    let tokenExpired = false;
    if (refreshToken) {
      tokenExpired = jwt_decode(refreshToken).exp < Date.now() / 1000;
      console.log(
        'Token expires in ' +
          Math.floor(jwt_decode(refreshToken).exp - Date.now() / 1000) +
          ' seconds',
      );
    }
    const isAuthenticated =
      AllowedRoles.includes(localStorage.getItem('role')) && !tokenExpired;

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

    return isAuthenticated ? <>{children}</> : <>Unauthorized</>;
  };
};

const AdminAuthenticated = RolesRequired(['ADMIN']);
const CustomerAuthenticated = RolesRequired(['CUSTOMER']);
const RetailOwnerAuthenticated = RolesRequired(['RETAIL_OWNER']);
const ArchitectAuthenticated = RolesRequired(['ARCHITECT']);

export {
  AdminAuthenticated,
  ArchitectAuthenticated,
  CustomerAuthenticated,
  RetailOwnerAuthenticated,
};

export default RolesRequired;
