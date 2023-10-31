import { AllInbox } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';

import FirstPage from '../pages/Algo/FirstPage';
import GetStarted from '../pages/Algo/GetStarted';
import RecommendationsPage from '../pages/Algo/RecommendationsPage';
import CustomerProfile from '../pages/CustomerProfile';
import Homepage from '../pages/HomePage';
import AddAdmin from '../pages/admin/AddAdmin';
import Member from '../pages/admin/Member';
import RequestTable from '../pages/admin/RequestTable';
import AdminDashboard from '../pages/admin/dash';
import AllMessagesInbox from '../pages/messages/AllMessagesInbox';
import Chat from '../pages/messages/Chat';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import CustomRequestRoutes from './CustomRequestRoutes';
import ProjectRoutes from './ProjectsRoutes';
import RentingItemRoutes from './RentingRoutes';
import ServiceProviderRoutes from './ServiceProviderRoutes';
import ShopRoutes from './ShopRoutes';
import PageNotFound from '../pages/PageNotFound';

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
    path: '/AlgoStart',
    element: <FirstPage />,
  },
  {
    path: '/AlgoStart',
    element: <FirstPage />,
  },

  {
    path: '/RecommendationsPage',
    element: <RecommendationsPage />,
  },

  {
    path: '/chat/:id',
    element: <Chat />,
  },

  {
    path: '/chat',
    element: <AllMessagesInbox />,
  },
  {
    path: '/customer',
    element: <CustomerProfile />,
  },

  {
    path: '/admindashboard',
    element: <AdminDashboard />,
  },

  {
    path: '/addadmin',
    element: <AddAdmin />,
  },
  {
    path: '/member',
    element: <Member />,
  },
  {
    path: '/RequestTable',
    element: <RequestTable />,
  },
  {
    path: '/PageNotFound',
    element: <PageNotFound />,
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
