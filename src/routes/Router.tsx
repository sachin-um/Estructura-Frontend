import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import RentingItemRoutes from './RentingRoutes';
import ShopRoutes from './ShopRoutes';
import ProjectRoutes from './Projects';

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
]);

export default altRouter;
