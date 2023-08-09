import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import ProjectRoutes from './Projects';
import RentingItemRoutes from './RentingRoutes';
import ShopRoutes from './ShopRoutes';
import TestRoutes from './TestRoutes';

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  ...AuthRoutes,
  ...AdminRoutes,
  ...BlogRoutes,
  ...RentingItemRoutes,
  ...ShopRoutes,
  ...ProjectRoutes,
  ...TestRoutes,
]);

export default altRouter;
