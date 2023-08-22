import type { RouteObject } from 'react-router-dom';

import AllProfessionals from '../pages/Professionals/AllProfessionals';
import ProfessionalCategory from '../pages/Professionals/ProfessionalCategory';
import AnyServiceProviderProfile from '../pages/ServiceProvider/AnyServiceProviderProfile';

const ServiceProviderRoutes: RouteObject[] = [
  {
    path: '/ServiceProvider/profile',
    element: <AnyServiceProviderProfile />,
  },
  // Need new ones
  // {
  //   path: '/ServiceProviderProfile/:id',
  //   element: <AnyServiceProviderProfile />,
  // },
  {
    path: '/Professionals/AllProfessionals',
    element: <AllProfessionals />,
  },
  {
    path: '/Professionals/:category',
    element: <ProfessionalCategory />,
  },
];
export default ServiceProviderRoutes;
