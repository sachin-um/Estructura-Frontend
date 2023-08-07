import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/HomePage';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  ...AuthRoutes,
  ...AdminRoutes,
  ...BlogRoutes,
]);

export default altRouter;
