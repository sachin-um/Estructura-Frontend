import type { RouteObject } from 'react-router-dom';

import AnyServiceProviderProfile from '../pages/ServiceProvider/AnyServiceProviderProfile';

const ServiceProviderRoutes: RouteObject[] = [
  {
    path: '/ServiceProvider/profile',
    element: <AnyServiceProviderProfile />,
  },
];
export default ServiceProviderRoutes;
