import { createBrowserRouter } from 'react-router-dom';


// import RequestTable from '../pages/admin/RequestTable';


import Billing from '../components/e-com/Billing';

// import RequestTable from '../pages/admin/RequestTable';


import FirstPage from '../pages/Algo/FirstPage';
import GetStarted from '../pages/Algo/GetStarted';
import RecommendationsPage from '../pages/Algo/RecommendationsPage';
import CustomerProfile from '../pages/CustomerProfile';
import Homepage from '../pages/HomePage';
import AddAdmin from '../pages/admin/AddAdmin';
import UserManage from '../pages/admin/UserManage';
// import VerifiedUsers from '../pages/admin/VerifiedUsers';
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
import ResetPasswordSuccessful from '../pages/ResetPasswordSuccessful';

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
    path: '/manageUsers',
    element: <UserManage />,

  },
  {
    path: '/billing',
    element: <Billing />,
  },
  {
    path: '/PageNotFound',
    element: <PageNotFound />,
  },
  {
    path: '/ResetPasswordSuccessful',
    element: <ResetPasswordSuccessful />,
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
