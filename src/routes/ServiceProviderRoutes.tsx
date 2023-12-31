import type { RouteObject } from 'react-router-dom';

import AllProfessionals from '../pages/Professionals/AllProfessionals';
import ProfessionalCategory from '../pages/Professionals/ProfessionalCategory';
import AnyServiceProviderProfile from '../pages/ServiceProvider/AnyServiceProviderProfile';
import ServiceProviderPublicProfile from '../pages/ServiceProviderPublicProfile';

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
    element: <ProfessionalCategory />,
  },
  {
    path: '/ServiceProvider/:id',
    element: <ServiceProviderPublicProfile />,
  },
];
export default ServiceProviderRoutes;
