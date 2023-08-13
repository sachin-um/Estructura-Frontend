import type { RouteObject } from 'react-router-dom';

import AllArchitects from '../pages/Professionals/AllArchitects';
import AllProfessionals from '../pages/Professionals/AllProfessionals';
import AnyServiceProviderProfile from '../pages/ServiceProvider/AnyServiceProviderProfile';

const ServiceProviderRoutes: RouteObject[] = [
  {
    path: '/ServiceProvider/profile',
    element: <AnyServiceProviderProfile />,
  },
  {
    path: '/Professionals/AllProfessionals',
    element: <AllProfessionals />,
  },
  {
    path: '/Professionals/:category',
    element: <AllArchitects />,
  },
];
export default ServiceProviderRoutes;
