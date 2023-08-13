import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import AllArchitects from '../pages/Professionals/AllArchitects';
import AllProfessionals from '../pages/Professionals/AllProfessionals';
import Home from '../pages/e-com/Home';
import Product from '../pages/e-com/Product';
import ProductList from '../pages/e-com/ProductList';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import ProjectRoutes from './Projects';
import RentingItemRoutes from './RentingRoutes';
import ShopRoutes from './ShopRoutes';

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/Professionals/AllProfessionals',
    element: <AllProfessionals />,
  },
  {
    path: '/Professionals/AllArchitects',
    element: <AllArchitects />,
  },
  ...AuthRoutes,
  ...AdminRoutes,
  ...BlogRoutes,
  ...RentingItemRoutes,
  ...ShopRoutes,
  ...ProjectRoutes,
]);

export default altRouter;
