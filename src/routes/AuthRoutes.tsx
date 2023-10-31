import type { RouteObject } from 'react-router-dom';

import CustomerProfile from '../pages/CustomerProfile';
import ForgotPassword from '../pages/ForgotPassword';
import HomeOwnerSignUp from '../pages/HomeOwnerSignUp';
import ResetPassword from '../pages/ResetPassword';
import ServiceProviderSignUp from '../pages/ServiceProviderSignUp';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UnauthorizedAccess from '../pages/unauthorized_access';
import VerifySuccess from '../pages/verification_success';
import Verify from '../pages/verify_email';

const AuthRoutes: RouteObject[] = [
  { path: '/SignIn', element: <SignIn /> },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/SignUp/HomeOwner',
    element: <HomeOwnerSignUp />,
  },
  {
    path: 'SignUp/ServiceProvider',
    element: <ServiceProviderSignUp />,
  },
  {
    path: '/emailNotVerified',
    element: <Verify />,
  },
  {
    path: '/emailVerified',
    element: <VerifySuccess />,
  },
  { path: '/unauthorized', element: <UnauthorizedAccess /> },
  {
    path: '/Customer/profile',
    element: <CustomerProfile />,
  },
  {
    path: '/resetPassword/:token',
    element: <ResetPassword />,
  },
];

export default AuthRoutes;
