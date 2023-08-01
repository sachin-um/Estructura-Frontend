import { type RouteObject } from 'react-router-dom';

import AuthTest from '../AuthTest';
import ForgotPassword from '../pages/ForgotPassword';
import HomeOwnerSignUp from '../pages/HomeOwnerSignUp';
import ServiceProviderSignUp from '../pages/ServiceProviderSignUp';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: RouteObject[] = [
  { path: '/auth', element: <AuthTest /> },
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
];

export default AuthRoutes;
