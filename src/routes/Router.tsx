import { createBrowserRouter } from 'react-router-dom';

import GetStarted from '../pages/Algo/GetStarted';
import Homepage from '../pages/HomePage';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import CustomRequestRoutes from './CustomRequestRoutes';
import ProjectRoutes from './ProjectsRoutes';
import RentingItemRoutes from './RentingRoutes';
import ServiceProviderRoutes from './ServiceProviderRoutes';
import ShopRoutes from './ShopRoutes';

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/Algo',
    element: <GetStarted />,
  },
  ...AuthRoutes,
  ...AdminRoutes,
  ...BlogRoutes,
  ...RentingItemRoutes,
  ...ShopRoutes,
  ...ProjectRoutes,
  ...ServiceProviderRoutes,
  ...CustomRequestRoutes,
]);

export default altRouter;
