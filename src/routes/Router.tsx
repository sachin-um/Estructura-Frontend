import { createBrowserRouter } from 'react-router-dom';

import AlgoPage1 from '../components/Algo/AlgoPage1';
import GetStarted from '../pages/Algo/GetStarted';
import Homepage from '../pages/HomePage';
import AllArchitects from '../pages/Professionals/AllArchitects';
import AllProfessionals from '../pages/Professionals/AllProfessionals';
import Home from '../pages/e-com/Home';
import Product from '../pages/e-com/Product';
import ProductList from '../pages/e-com/ProductList';
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
  {
    path: '/AlgoPage1',
    element: <AlgoPage1 />,
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
