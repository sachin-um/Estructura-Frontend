import { type RouteObject, createBrowserRouter } from 'react-router-dom';

import ForgotPassword from '../pages/ForgotPassword';
import HomeOwnerSignUp from '../pages/HomeOwnerSignUp';
// Import pages
import Homepage from '../pages/HomePage';
import AddNewProject from '../pages/ServiceProvider/AddNewProject';
import ViewProject from '../pages/ServiceProvider/ViewProject';
import ViewResponse from '../pages/ServiceProvider/ViewResponse';
import ServiceProviderProfile from '../pages/ServiceProviderProfile';
import ServiceProviderSignUp from '../pages/ServiceProviderSignUp';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AdminDashboard from '../pages/admin/dash';
import Bar from '../pages/adminDashboard/bar';
import Calendar from '../pages/adminDashboard/calendar';
import Contacts from '../pages/adminDashboard/contacts';
//admin dashboard
import Dashboard from '../pages/adminDashboard/dashboard';
import Form from '../pages/adminDashboard/form';
import Geography from '../pages/adminDashboard/geography';
import Invoices from '../pages/adminDashboard/invoices';
import Line from '../pages/adminDashboard/line';
import Pie from '../pages/adminDashboard/pie';
import Reviews from '../pages/adminDashboard/reviews';
import Team from '../pages/adminDashboard/team';
import BlogCreate from '../pages/blog/create';
//blog pages
import BlogHome from '../pages/blog/home';
import BlogView from '../pages/blog/view';
import Cart from '../pages/e-com/Cart';
import Home from '../pages/e-com/Home';
import Product from '../pages/e-com/Product';
import ProductList from '../pages/e-com/ProductList';
import FindFurniture from '../pages/findfurniture';
import Play from '../play';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/SignIn',
    element: <SignIn />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
  {
    path: '/SignUp/HomeOwner',
    element: <HomeOwnerSignUp />,
  },
  {
    path: '/SignUp/ServiceProvider',
    element: <ServiceProviderSignUp />,
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />,
  },
  {
    path: '/e-com/Home',
    element: <Home />,
  },
  {
    path: '/e-com/ProductList',
    element: <ProductList />,
  },
  {
    path: '/e-com/Product',
    element: <Product />,
  },
  {
    path: '/e-com/Cart',
    element: <Cart />,
  },
  {
    path: '/ServiceProviderProfile',
    element: <ServiceProviderProfile />,
  },
  {
    path: '/AddNewProject',
    element: <AddNewProject />,
  },
  {
    path: '/ViewProject',
    element: <ViewProject />,
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/admin/team',
    element: <Team />,
  },
  {
    path: '/admin/contacts',
    element: <Contacts />,
  },
  {
    path: '/admin/invoices',
    element: <Invoices />,
  },
  {
    path: '/admin/form',
    element: <Form />,
  },
  {
    path: '/admin/bar',
    element: <Bar />,
  },
  {
    path: '/admin/pie',
    element: <Pie />,
  },
  {
    path: '/admin/line',
    element: <Line />,
  },
  {
    path: '/admin/reviews',
    element: <Reviews />,
  },
  {
    path: '/admin/calendar',
    element: <Calendar />,
  },
  {
    path: '/admin/geography',
    element: <Geography />,
  },
  {
    path: '/admin/dash',
    element: <AdminDashboard />,
  },
  {
    path: '/blog/',
    element: <BlogHome />,
  },
  {
    path: '/blog/view',
    element: <BlogView />,
  },
  {
    path: '/blog/create',
    element: <BlogCreate />,
  },
  {
    path: '/ViewResponse',
    element: <ViewResponse />,
  },
  {
    path: '/findFurniture',
    element: <FindFurniture />,
  },
]);

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/play',
    element: <Play />,
  },
  ...AuthRoutes,
  ...AdminRoutes,
]);

export default router;
